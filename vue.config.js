module.exports = {
    devServer: {
        proxy: {
            '/thinger': {
                target:'http://10.211.55.8:10080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/thinger': 'localhost:8080'
                }

            }
        }
    }
}
