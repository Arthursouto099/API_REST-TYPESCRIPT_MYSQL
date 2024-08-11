import { Request, Response } from "express";
import { Fornecedor } from "../models/Fornecedor";


export class FornecedorController {

    static async getAll(req: Request, res: Response) {
        const result = await Fornecedor.getAll()
        res.status(200).json(result)
    }

    static async getById(req: Request, res: Response) {
        const {id} = req.params
        const result = await Fornecedor.getById(parseInt(id, 10))
        res.status(200).json(result)
    }

    static async create(req: Request, res: Response) {
        const {nome, id_produto} = req.body
        const result = await Fornecedor.create(nome, id_produto)
        res.status(201).json(result)
    }


    static async update(req: Request, res: Response)  {
        const {id} = req.params
        const {nome, id_produto} = req.body
        const result = await Fornecedor.update(nome, id_produto, parseInt(id, 10))
        res.status(200).json(result)
    }

    static async delete(req: Request, res: Response) {
        const {id} = req.params
        const result = await Fornecedor.delete(parseInt(id, 10))
        res.status(201).json(result)
    }
}