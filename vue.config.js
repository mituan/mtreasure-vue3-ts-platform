const path = require("path");

module.exports = {
    configureWebpack: {   //vue-cli  调用webpack配置
        mode: process.env.NODE_ENV=='development'?'development':'production',  //告知 webpack 使用相应环境的内置优化
        resolve: {
            alias: { //设置别名
                '@':path.resolve('src')
            }
        },
    },
    css: {
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
        // 默认生产环境下是 true，开发环境下是 false
        extract: false,
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
        sourceMap: false,
        // loaderOptions: {
        //     // 给 sass-loader 传递选项
        //     scss: {
        //         additionalData: `@import "@/theme/index.scss";`
        //       },
        // },
    },
}