import { Router } from "express";
import { FornecedorController } from "../controllers/fornecedorController";


const route = Router()


route.get('/fornecedores', FornecedorController.getAll)
route.get('/fornecedores/:id', FornecedorController.getById)
route.post('/fornecedores/create', FornecedorController.create)
route.put('/fornecedores/update/:id', FornecedorController.update)
route.delete('/fornecedores/delete/:id', FornecedorController.delete)
export default route