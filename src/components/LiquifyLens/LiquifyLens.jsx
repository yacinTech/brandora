"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./LiquifyLens.module.css";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduced(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

export default function LiquifyLens({
  backgroundImageUrl = "/images/nebula_rift.webp",
  lensSize = 280,
  strength = 0.75,
  className,
  minHeight = 520,
  mouseRef,
}) {
  const hostRef = useRef(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const rootStyle = useMemo(
    () => ({
      "--ll-min-height":
        typeof minHeight === "number" ? `${minHeight}px` : minHeight,
    }),
    [minHeight]
  );

  const motionScale = prefersReducedMotion ? 0.6 : 1;
  const resolvedStrength = Math.max(0, Math.min(1, strength)) * motionScale;

  const handlePointerMove = useCallback((event) => {
    const rect = hostRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    pointerRef.current = {
      x: clamp01(x),
      y: clamp01(y),
    };
  }, []);

  const handlePointerLeave = useCallback(() => {
    pointerRef.current = { x: 0.5, y: 0.5 };
  }, []);

  return (
    <section
      ref={hostRef}
      className={className ? `${styles.root} ${className}` : styles.root}
      style={rootStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Liquify lens background"
    >
      <div className={styles.webgl} aria-hidden="true">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 1], fov: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <LensPlane
            pointerRef={pointerRef}
            mouseRef={mouseRef}
            lensSize={lensSize}
            strength={resolvedStrength}
            backgroundImageUrl={backgroundImageUrl}
            prefersReducedMotion={prefersReducedMotion}
          />
        </Canvas>
      </div>

      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
    </section>
  );
}

function LensPlane({
  pointerRef,
  mouseRef,
  lensSize,
  strength,
  backgroundImageUrl,
  prefersReducedMotion,
}) {
  const materialRef = useRef(null);
  const loadedTextureRef = useRef(null);
  const fallbackTexture = useMemo(() => {
    const data = new Uint8Array([12, 14, 20, 255]);
    const tex = new THREE.DataTexture(data, 1, 1);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
  const resolvedUrl =
    typeof backgroundImageUrl === "string" ? backgroundImageUrl.trim() : "";

  useEffect(() => {
    if (!resolvedUrl) {
      if (loadedTextureRef.current) {
        loadedTextureRef.current.dispose();
        loadedTextureRef.current = null;
      }
      return;
    }

    let canceled = false;
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");

    loader.load(
      resolvedUrl,
      (tex) => {
        if (canceled) {
          tex.dispose();
          return;
        }
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = true;
        if (loadedTextureRef.current) {
          loadedTextureRef.current.dispose();
        }
        loadedTextureRef.current = tex;
      },
      undefined,
      () => {
        if (loadedTextureRef.current) {
          loadedTextureRef.current.dispose();
          loadedTextureRef.current = null;
        }
      }
    );

    return () => {
      canceled = true;
    };
  }, [resolvedUrl]);

  const material = useMemo(() => {
    const uniforms = {
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uLensPx: { value: lensSize },
      uRes: { value: new THREE.Vector2(1, 1) },
      uStrength: { value: strength },
      uHasTex: { value: 0 },
      uTex: { value: fallbackTexture },
      uTexSize: { value: new THREE.Vector2(1, 1) },
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying vec2 vUv;

      uniform float uTime;
      uniform vec2 uPointer;
      uniform float uLensPx;
      uniform vec2 uRes;
      uniform float uStrength;
      uniform float uHasTex;
      uniform sampler2D uTex;
      uniform vec2 uTexSize;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 34.345);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f*f*(3.0-2.0*f);
        return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
      }
vec2 coverUV(vec2 uv, vec2 texSize, vec2 screenSize){
    float texAspect = texSize.x / max(texSize.y, 1e-5); // نسبة عرض/ارتفاع الصورة
    float screenAspect = screenSize.x / max(screenSize.y, 1e-5); // نسبة عرض/ارتفاع الشاشة

    vec2 outUv = uv;

    // حافظ على كامل العرض للصورة (horizontal)
    if(texAspect > screenAspect){
        // الصورة أعرض من الشاشة: عرض كامل، ارتفاع مقصوص قليلاً
        float scale = screenAspect / texAspect;
        outUv.y = (uv.y - 0.5) * scale + 0.5;
    } else {
        // الصورة أقل عرضاً من الشاشة: قم بتحجيم كامل العرض، ارتفاع طبيعي
        outUv.y = uv.y; 
    }

    return outUv;
}

      vec3 proceduralBackground(vec2 uv){
        vec3 a = vec3(0.04, 0.04, 0.07);
        vec3 b = vec3(0.08, 0.10, 0.18);
        vec3 c = vec3(0.05, 0.16, 0.20);
        float g1 = smoothstep(0.0, 1.0, uv.y);
        float g2 = smoothstep(0.0, 1.0, uv.x);
        vec3 col = mix(a, b, g1);
        col = mix(col, c, g2*0.35);

        float glow = exp(-distance(uv, vec2(0.35,0.35))*4.2)*0.18;
        col += glow;

        float grain = (hash(uv * uRes + uTime) - 0.5) * 0.02;
        col += grain;

        return col;
      }

      vec3 sampleBg(vec2 uv){
        if(uHasTex > 0.5){
          vec2 cuv = coverUV(uv, uTexSize, uRes);
          return texture2D(uTex, cuv).rgb;
        }
        return proceduralBackground(uv);
      }

      float circleMask(vec2 uv, vec2 center, float radius, float feather) {
        float d = distance(uv, center);
        return smoothstep(radius, radius - feather, d);
      }

      void main() {
        vec2 uv = vUv;
        vec2 p = uPointer;

        float minRes = min(uRes.x, uRes.y);
        float radius = (uLensPx / minRes) * 0.5;
        float feather = radius * 0.28;

        vec3 base = sampleBg(uv);

        float mask = circleMask(uv, p, radius, feather);

        vec2 d = uv - p;
        float dist = length(d) / max(radius, 1e-5);

        float bulge = pow(clamp(1.0 - dist, 0.0, 1.0), 1.6);

        float n = noise(uv*6.0 + uTime*0.12);
        float wobble = (n - 0.5) * 0.08;

        float k = (0.18 + wobble) * uStrength * bulge;
        vec2 refractUV = uv + normalize(d + 1e-5) * k;

        float rim = smoothstep(0.55, 1.0, dist);
        float ca = rim * 0.010 * uStrength;
        vec2 caDir = normalize(d + 1e-5) * ca;

        vec2 blurDir = normalize(d + 1e-5) * (0.006 * uStrength * bulge);
        vec3 s0 = sampleBg(refractUV);
        vec3 s1 = sampleBg(refractUV + blurDir);
        vec3 s2 = sampleBg(refractUV - blurDir);
        vec3 refracted = (s0*0.60 + s1*0.20 + s2*0.20);

        float r = sampleBg(refractUV + caDir).r;
        float g = refracted.g;
        float b = sampleBg(refractUV - caDir).b;
        vec3 chroma = vec3(r, g, b);

        // Keep the lens neutral: just refraction, no white highlight/gradient.
        vec3 lensCol = chroma;

        vec3 col = mix(base, lensCol, mask);

        float v = smoothstep(0.0, 0.6, uv.x) * smoothstep(0.0, 0.6, uv.y);
        v *= smoothstep(0.0, 0.6, 1.0-uv.x) * smoothstep(0.0, 0.6, 1.0-uv.y);
        col *= mix(0.92, 1.0, v);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: false,
      depthWrite: false,
    });
  }, [fallbackTexture, lensSize, strength]);

  useEffect(() => {
    materialRef.current = material;
    return () => {
      material.dispose();
    };
  }, [material]);

  useEffect(() => {
    return () => {
      if (loadedTextureRef.current) {
        loadedTextureRef.current.dispose();
        loadedTextureRef.current = null;
      }
      fallbackTexture.dispose();
    };
  }, [fallbackTexture]);

  useFrame(({ clock, size }) => {
    const m = materialRef.current;
    if (!m) return;

    const timeScale = prefersReducedMotion ? 0.45 : 1;
    m.uniforms.uTime.value = clock.elapsedTime * timeScale;
    m.uniforms.uRes.value.set(size.width, size.height);
    m.uniforms.uLensPx.value = lensSize;
    m.uniforms.uStrength.value = strength;

    let px = pointerRef.current.x;
    let py = pointerRef.current.y;

    if (mouseRef?.current) {
      px = mouseRef.current.x * 0.5 + 0.5;
      py = 0.5 - mouseRef.current.y * 0.5;
    }

    px = clamp01(px);
    py = clamp01(py);

    const uP = m.uniforms.uPointer.value;
    uP.x = THREE.MathUtils.lerp(uP.x, px, 0.12);
    uP.y = THREE.MathUtils.lerp(uP.y, 1.0 - py, 0.12);

    const activeTexture = loadedTextureRef.current;
    const img = activeTexture?.image;
    const imgWidth = img?.width || img?.naturalWidth || 0;
    const imgHeight = img?.height || img?.naturalHeight || 0;
    const hasTexture = Boolean(activeTexture && imgWidth > 0 && imgHeight > 0);
    m.uniforms.uHasTex.value = hasTexture ? 1 : 0;
    m.uniforms.uTex.value = hasTexture ? activeTexture : fallbackTexture;
    m.uniforms.uTexSize.value.set(
      hasTexture ? imgWidth : 1,
      hasTexture ? imgHeight : 1
    );
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}