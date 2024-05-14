
module.exports = {
    devServer: {
        proxy: {
            '^/users': {
                target: 'http://localhost:8080/',
                ws: true,
                changeOrigin: true
            },
        }
    },
    configureWebpack: {
        resolve: {
            fallback: {
                "querystring": require.resolve("querystring-es3")
            }
        }
    }
}

