export default function handler(req, res) {
  // ✅ Cross-origin isolation headers required for WebContainer / SharedArrayBuffer
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  
  // Redirect root to your main HTML file
  res.writeHead(302, { Location: '/index.html' });
  res.end();
}
