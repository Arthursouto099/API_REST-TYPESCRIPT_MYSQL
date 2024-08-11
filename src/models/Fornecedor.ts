import { db } from "../database";


export class Fornecedor {
    id: number
    nome: string
    id_produto: number 

    constructor(id: number, nome: string, id_produto: number) {
        this.id = id
        this.nome = nome
        this.id_produto = id_produto
    }

    static async getAll() {
        const [rows] = await db.query('SELECT * FROM FORNECEDORES')
        return rows
    }

    static async getById(id: number) {
        const [rows] = await db.query('SELECT * FROM FORNECEDORES WHERE ID = ?', [id])
        return rows
    }

    static async create(nome: string, id_produto: number) {
        const [result] = await db.query('INSERT INTO FORNECEDORES (NOME, ID_PRODUTO) VALUES (?,?)', [nome,id_produto ])
        return result 
    }

    static async update(nome: string, id_produto: number, id: number) {
        const [result] = await db.query('UPDATE FORNECEDORES SET NOME = ?, ID_PRODUTO = ? WHERE ID = ?', [nome, id_produto, id])
        return result
    }

    static async delete(id: number) {
        const [result] =await db.query("DELETE FROM FORNECEDORES WHERE ID = ?", [id])
        return result
    }


}