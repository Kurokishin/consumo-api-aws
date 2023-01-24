const express = require('express');
const router  = express.Router();
const axios = require('axios');

const format = require("../formatacoes")

router.get('/', async(req, res) => {
    try {
        const {data} = await axios("https://www.boredapi.com/api/activity")
        // console.log(data) exibe todos os dados de retorno da API

        const atividades = JSON.parse(`
        {
            "id": "${format.geraGUID()}",
            "atividade": "${data.activity}",
            "tipo": "${data.type}",
            "participantes": ${data.participants},
            "acessibilidade": "${format.acessibilidade(data.accessibility)}"
        }`);

        res.send(atividades)

    } catch (error) {
        res.send({error: error.message});
    }
});

module.exports = router;