// const path = require("path")
// const resolve = dir => path.join(__dirname, dir)
// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       .set("@", resolve("src"))
//       .set("assets", resolve("@/assets"))
//       .set("common", resolve("@/common"))
//       .set("components", resolve("@/components"))
//       .set("network", resolve("@/network"))
//       .set("views", resolve("@/views"))
//       .set("store", resolve("@/store"))
//   }
// }
module.exports = {
  publicPath: "",
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views",
        "store": "@/store"
      }
    }
  }
}
