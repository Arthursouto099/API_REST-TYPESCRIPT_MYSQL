import { Router } from "express";
import { ProdutoController } from "../controllers/produtoController";


const route = Router()


route.get('/produtos', ProdutoController.getAll)
route.get('/produtos/:id', ProdutoController.getById)
route.post('/produtos/cadastro', ProdutoController.create)
route.put('/produtos/update/:id', ProdutoController.update)
route.delete('/produtos/delete/:id', ProdutoController.delete)

export default route