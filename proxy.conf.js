const PROXY_CONFIG = [
    {
        context:[
            "api"
        ],
        target: "http://www.mockachino.com",
        pathRewrite : {
        "^api" : "/9570b439-6f80-48"
        },
        changeOrigin : true,
        secure : false
    }
]
module.exports = PROXY_CONFIG;