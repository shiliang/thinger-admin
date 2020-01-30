module.exports = {
    devServer: {
        proxy: {
            '/thingerboot': {
                target:'http://10.211.55.5:10078',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/thingerboot': 'localhost:8080'
                }

            }

        }
    }
}
