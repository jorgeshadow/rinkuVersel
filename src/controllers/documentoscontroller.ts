import { Request,Response } from "express"; 
const {Pool } =require('pg')

const config={
    user:'reebapiffnhibp',
    host:'ec2-18-215-41-121.compute-1.amazonaws.com',
    password:'ca78ff4669b83ecd30c32d7bcba1b493216e033058d39190f14bf3adf81ae125',
    database:'d965m8i3faog71',
    ssl: {
        rejectUnauthorized: false
      },
    port:'5432'
}

const pool=new Pool(config)

class DocumentosController{

    
   async getnominas(req:Request,res:Response):Promise<any>{
    const resp =await pool.query(
        `SELECT 
        *
        FROM 
          public."Nominas" ;`
    )
    res.json(resp)
}
async getempleados(req:Request,res:Response):Promise<any>{
  const resp =await pool.query(
      `SELECT 
      *
      FROM 
        public."Usuarios" ;`
  )
  res.json(resp)
}
async getempleado(req:Request,res:Response):Promise<any>{
  const params=req.params; 
  console.log(params)
  const resp =await pool.query(
      `SELECT 
      *
     FROM 
       public."Usuarios" where noempleado='${params.id}';`
  )
  res.json(resp)
}
async getnomina(req:Request,res:Response):Promise<any>{
  const resp =await pool.query(
      `SELECT 
      *
      FROM 
        public."nominas" ;`
  )
  res.json(resp)
}
async postempleado(req:Request,res:Response):Promise<any>{
  const params=req.body; 
  const resp =await pool.query(
      `INSERT INTO 
      public."Usuarios"
    (
      noempleado,
      nombre,
      rol
    )
    VALUES (
      '${params.noempleado}',
      '${params.nombre}',
      '${params.rol}'
    );`
  )
  res.json(resp)
}  
async deleteempleado(req:Request,res:Response):Promise<any>{
  const params=req.params; 
  const resp =await pool.query(
      `DELETE FROM 
      public."Usuarios" 
    WHERE 
      noempleado = ${params.noempleado}
    ;`
  )
  res.json(resp)
} 
async deletenominas(req:Request,res:Response):Promise<any>{
  const params=req.params;  
  const resp =await pool.query(
      `DELETE FROM 
      public."Nominas" 
    WHERE 
    no_empleado = ${params.noempleado}
    ;`
  )
  res.json(resp)
}
async updateempleado(req:Request,res:Response):Promise<any>{
  const params=req.body;  
  console.log(params)
  const resp =await pool.query(
      `UPDATE 
      public."Usuarios" 
    SET 
      nombre = '${params.nombre}',
      rol = '${params.rol}'
    WHERE 
      noempleado = ${params.noempleado}
    ;`
  )
 
  res.json(resp)
} 
async postnomina(req:Request,res:Response):Promise<any>{
  const params=req.body;
  console.log(params)
  const resp =await pool.query(
      `INSERT INTO 
      public."Nominas"
    ( 
      no_empleado,
      isr,
      total_base,
      total_bono,
      total_despensa,
      total,
      entregas 
    )
    VALUES ( 
      ${params.noempleado},
      ${params.isr},
      ${params.totalbase},
      ${params.totalbono},
      ${params.totaldespensa}, 
      ${params.total}, 
      ${params.entregas}
    );`
  )
  res.json(resp)
}  
} export const documentosController=new DocumentosController();