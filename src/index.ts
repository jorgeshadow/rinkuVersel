import express,{Application} from 'express';
const cors = require('cors')
import documentosRoute from "./routes/documentosRoute";
class Server{
    public app:Application

    constructor(){
        this.app=express();
        this.onConfig();
        this.onRoutes()
    }
    onConfig():void{
        this.app.set('port',process.env.PORT || 2100)
        this.app.use(express.json());
        this.app.use(cors('Access-Control-Allow-Credentials', true,
        'Access-Control-Allow-Origin', '*','Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT','Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'));
        this.app.use(express.urlencoded({extended:false}))
    }
    onRoutes():void{
        this.app.use('/',documentosRoute)
    }
    onStart(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('corriendo en el puerto ',this.app.get('port'));
        });
}
}
const server =new Server();
server.onStart();