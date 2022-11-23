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
        this.app.use(cors('Access-Control-Allow-Origin','*',
        'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers', 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials', true))
        
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