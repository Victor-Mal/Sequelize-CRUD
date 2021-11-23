const http = require("http");
const app = require("./app");

const PORT = 5000;

http.createServer(app).listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});