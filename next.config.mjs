/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exporta um site estático (pasta /out) — pode ser publicado em
  // Vercel, Netlify, GitHub Pages ou qualquer hospedagem simples.
  output: "export",
  // Caminhos relativos: o site funciona mesmo dentro de uma subpasta.
  assetPrefix: "./",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
