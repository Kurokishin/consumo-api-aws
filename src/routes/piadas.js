const express = require('express');
const router  = express.Router();
const axios = require('axios');

const format = require("../formatacoes")

router.get('/', async(req, res) => {
    try {
        const {data} = await axios("https://api.chucknorris.io/jokes/random")
        // console.log(data) exibe todos os dados de retorno da API
    
        const piadas = JSON.parse(`
        { 
            "data_atualizacao": "${format.formatDate(data.updated_at)}",
            "data_criacao": "${format.formatDate(data.created_at)}",
            "icone": "${data.icon_url}",
            "id":"${format.geraGUID()}",
            "piada": "${format.caixaAlta(data.value)}",
            "referencia": "${data.url}"
        }`);
    
        res.send(piadas);

    } catch (error) {
        res.send({error: error.message});
    }
});

module.exports = router;