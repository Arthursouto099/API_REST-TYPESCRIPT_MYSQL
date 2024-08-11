import { db } from "../database";


export class Produto {
    id: number
    nome: string
    quantidade: number
    valor: number


    constructor(id: number, nome: string, quantidade: number, valor: number) {
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
        this.valor = valor
    }



    static async getAll() {
        const [rows] = await db.query('SELECT * FROM PRODUTOS')
        return rows
    }

    static async getById(id: number) {
        const [rows] = await db.query('SELECT * FROM PRODUTOS WHERE id = ?', [id])
        return rows
    }

    static async create(nome: string, quantidade: number, valor: number) {
        const [result] = await db.query('INSERT INTO PRODUTOS (NOME, QUANTIDADE, VALOR) VALUES(?,?,?) ', [nome, quantidade, valor])
        return result
    }

    static async update(nome: string, quantidade: number, valor: number, id: number) {
        const [result] = await db.query('UPDATE PRODUTOS SET NOME = ?, QUANTIDADE = ?, VALOR = ? WHERE ID = ?', [nome, quantidade, valor, id])
        return result
    }

    static async delete(id: number) {
        const [result] = await db.query('DELETE FROM PRODUTOS WHERE ID = ?', [id])
        return result
    }
}