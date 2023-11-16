const express = require("express")
const app = express()
const PORT = 9000

app.use(express.json())

app.get('/mundo', (request, response)=> {
    response.send("Hello World!")
})


app.listen(PORT, () => {
console.log("O servidor esta rodando em localhost:9000")
})

const pound2real = 6.3
const resposta = prompt("Digite o valor em libras")
const result = resposta * pound2real
console.log(result + " reais")