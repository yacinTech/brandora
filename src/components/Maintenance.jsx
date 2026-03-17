"use client";

export default function Maintenance() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>🚧 Site en maintenance</h1>
        <p style={styles.text}>
          Notre site est actuellement en maintenance.
          <br />
          Merci de revenir plus tard.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999999,
    color: "white",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  box: {
    padding: "40px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.05)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "18px",
    opacity: 0.8,
  },
};