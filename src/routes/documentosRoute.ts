import {Router}from 'express';

import { documentosController } from "../controllers/documentoscontroller";


class DocumentosRoute{
    public router:Router=Router();

    constructor(){
         this.onConfig(); 
    }
    onConfig():void{ 
         this.router.get('/nominas',documentosController.getnominas);
         this.router.get('/empleados',documentosController.getempleados);
         this.router.delete('/empleados/:noempleado',documentosController.deleteempleado);
         this.router.delete('/nominas/:noempleado',documentosController.deletenominas);
         this.router.get('/nominas:numer',documentosController.getnomina);
         this.router.get('/empleado/:id',documentosController.getempleado); 
         this.router.post('/empleados',documentosController.postempleado);
         this.router.put('/empleado',documentosController.updateempleado);
         this.router.post('/nominas',documentosController.postnomina);

    }
}
const documentosRoute = new DocumentosRoute();
export default documentosRoute.router