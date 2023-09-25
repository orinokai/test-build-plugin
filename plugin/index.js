const fs = require("fs");

module.exports = {
  onEnd: () => {
    fs.unlinkSync("public/index.html");
  },
}
