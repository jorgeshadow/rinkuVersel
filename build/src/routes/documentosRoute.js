"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentoscontroller_1 = require("../controllers/documentoscontroller");
class DocumentosRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.onConfig();
    }
    onConfig() {
        this.router.get('/articulos', documentoscontroller_1.documentosController.getarticles);
    }
}
const documentosRoute = new DocumentosRoute();
exports.default = documentosRoute.router;
