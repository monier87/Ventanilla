const configur = {
    envDev:true,
    dev:{
        api:{
            
            base:"http://localhost:4000",
            version:"/v1",
            ruta:{
                login:"/login",
                auth:"/checkAuth",
                logout:"/logout",
                tramite:"/tramite",
            }
        }
    },
    prod:{
        api:{
            base:"http://api.sgd.local/api",
            version:"/v1",
            ruta:{
                login:"/auth/login",
                logout:"/auth/logout"
            }
        }
    }
};

export default configur;
