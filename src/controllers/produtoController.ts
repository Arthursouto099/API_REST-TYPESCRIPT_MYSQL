import { Request, Response } from "express";
import { Produto } from "../models/Produto";

 

export class ProdutoController {

    static async getAll( req: Request, res: Response) {
        const produtos = await Produto.getAll()
        res.status(200).json(produtos)
    }

    static async getById(req: Request, res: Response) {
        const {id} = req.params
        const result = await Produto.getById(parseInt(id, 10))
        res.status(200).json(result)
    }

    static async create(req: Request, res: Response ) {
        const {nome, quantidade, valor} = req.body
        const result = await Produto.create(nome, quantidade, valor)
        res.status(201).json(result)
    }
    
    static async update(req: Request, res: Response) {
        const {id} = req.params
        const {nome, quantidade, valor} = req.body 
        const result = await Produto.update(nome, quantidade, valor, parseInt(id, 10))
        res.status(200).json(result)
    }

    static async delete(req: Request, res: Response) {
        const {id} = req.params
        const result = Produto.delete(parseInt(id, 10))
        res.status(200).json(result)
    }
}