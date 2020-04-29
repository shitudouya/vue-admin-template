module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true,
        port: 8080
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}