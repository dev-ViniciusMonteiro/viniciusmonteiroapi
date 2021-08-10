require('dotenv').config()
const express = require('express')
var cors = require('cors')
const port = process.env.PORT


const app = express()
app.use(express.json())
app.use(cors())

app.get('/sobre', (req, res) => { return res.status(200).json({ name: 'Vinicius Monteiro Orlandi', age: 23, course: "Ciência Da Computação", email: "dev.viniciusmonteiro@gmail.com" }) })

app.get('/social', (req, res) => { return res.status(200).json({ Facebook: 'https://www.facebook.com/vinicius.monteiro.7549/', linkedin: "https://www.linkedin.com/in/vinicius-monteiro-orlandi-8b06191b4/", github: "https://github.com/dev-ViniciusMonteiro" }) })

app.get('/image/perfil', (req, res) => res.status(200).json({ image: "https://media.discordapp.net/attachments/796490440429404192/872175099636240435/eu.jpg?width=594&height=594" }))

app.get('/cep/generator', (req, res) => res.status(200).json({ CEP: `013${getRandomInt(10, 60)}000` })) //01310-000

app.get('/', (req, res) => res.json({ msg: "Ola Mundo" }))

app.listen(port, (req, res) => { console.log("API rodando na porta:" + port) })

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}