
const axios = require('axios');
const express = require('express');
const router = express.Router();


router.get('/:cep', async (req, res) => {

    const { cep } = req.params;

    if (cep.length != 8) {
        res.json({ result: "Cep Code should contains 8 numbers" })
    }

    if (isNaN(cep)) {

        res.status(400).json({ result: "Cep Code should contains only numbers" });

    }
    const dataFromCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (dataFromCep.data.erro === true) {
        res.json({ result: "Cep Code does not exists" })
    } else {
        res.json({ data: dataFromCep.data });
    }



});

module.exports = router;