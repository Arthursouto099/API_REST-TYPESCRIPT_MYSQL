import  express from "express";
import  routeProdutos from "./routes/produtoRoute";
import  fornecedorRoutes from "./routes/fornecedorRoute"


const app = express()
const port = 3000


app.use(express.json())
app.use(routeProdutos)
app.use(fornecedorRoutes)




app.listen(port, () => {
    console.log(`Rodando na porta {http//:localhost:${port}}`)
})