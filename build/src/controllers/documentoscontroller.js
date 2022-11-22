"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentosController = void 0;
const { Pool } = require('pg');
const config = {
    user: 'reebapiffnhibp',
    host: 'ec2-18-215-41-121.compute-1.amazonaws.com',
    password: 'ca78ff4669b83ecd30c32d7bcba1b493216e033058d39190f14bf3adf81ae125',
    database: 'd965m8i3faog71',
    ssl: {
        rejectUnauthorized: false
    },
    port: '5432'
};
const pool = new Pool(config);
class DocumentosController {
    getarticles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield pool.query(`SELECT 
        *
        FROM 
          public."ARTICULOS" ;`);
            res.json(resp);
        });
    }
}
exports.documentosController = new DocumentosController();
