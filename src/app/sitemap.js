// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://brandora.fun";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-11"),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-03-01"),
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date("2026-02-20"),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-02-25"),
    },
  ];
}