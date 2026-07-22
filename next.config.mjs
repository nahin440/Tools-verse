import { createRequire } from "module";
import { fileURLToPath } from "url";

const emptyModulePath = fileURLToPath(new URL("./src/lib/empty-module.js", import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // pptxgenjs conditionally dynamic-imports node:fs/node:https only
      // for its Node.js file-writing code path (never reached — we
      // always call pptx.write({ outputType: "blob" }) in the browser).
      // webpack treats "node:" as a URI scheme rather than a plain
      // specifier, so resolve.alias can't intercept it; a module
      // replacement plugin can. `webpack` here is the instance Next.js
      // itself bundles and passes in, not a separate npm dependency.
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/^node:(fs|https)$/, (resource) => {
          resource.request = emptyModulePath;
        })
      );
      config.resolve.alias = {
        ...config.resolve.alias,
        module: false,
      };
    }
    return config;
  },
  async headers() {
    return [
      {
        // Cross-origin isolation, required for SharedArrayBuffer which
        // multi-threaded ffmpeg.wasm needs. credentialless (rather than
        // require-corp) lets same-origin image/font requests and no-cors
        // third-party resources keep working without needing every such
        // resource to send its own CORP header.
        source: "/:path*",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
        ],
      },
      {
        // Long-lived caching for the self-hosted vendor assets (pdf.js,
        // tesseract, ffmpeg cores) — these are content-addressed by
        // version already and rarely change, so aggressive caching here
        // meaningfully speeds up repeat visits to any tool page.
        source: "/vendor/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
