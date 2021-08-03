const express = require('express')
const porta = 3000


const app = express()
app.use(express.json())

app.get('/sobre', (req, res) => { return res.status(400).json({ name: 'Vinicius Monteiro Orlandi', age: 23, course: "Ciência Da Computação", email: "dev.viniciusmonteiro@gmail.com" }) })

app.get('/social', (req, res) => { return res.status(400).json({ Facebook: 'https://www.facebook.com/vinicius.monteiro.7549/', linkedin: "https://www.linkedin.com/in/vinicius-monteiro-orlandi-8b06191b4/", github: "https://github.com/dev-ViniciusMonteiro" }) })

app.get('/image/perfil', (req, res) => res.status(400).json({ image: "https://media.discordapp.net/attachments/796490440429404192/872175099636240435/eu.jpg?width=594&height=594" }))

app.listen(porta, (req, res) => { console.log("API rodando na porta:" + porta) })