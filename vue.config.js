module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vuejs-twitch/" : "/",
  configureWebpack: {
    devtool: "source-map",
  },
};
