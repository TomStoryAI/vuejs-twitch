const path = require("path");
module.exports = {
  outputDir: "./docs",
  publicPath: process.env.NODE_ENV === "production" ? "/vuejs-twitch/" : "/",
};
