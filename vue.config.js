module.exports = {
    // 前端如何解决跨域
    devServer:{
        host:"localhsot",
        port:8080,
        proxy:{
            '/api':{
                
            }
        }
    },
    configureWebpack:{
        //文件别命
        reslove:{
            alias:{
                "components":"@/components",// 组件别命
                "views":"@/views", // 页面别命
                "util":"@/util", // 公用方法别命
            }
        }
    }
}