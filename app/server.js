const http = require("http");

const PORT = process.env.PORT || 3000;
const INSTANCE = process.env.INSTANCE || "unknown";

http.createServer((req, res) => {
  res.end(`Hello from Node.js Instance: ${INSTANCE}`);
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT} [Instance ${INSTANCE}]`);
});
