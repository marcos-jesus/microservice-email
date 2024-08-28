import express from "express";
const router = express.Router();

import emailService from "../services/email/index.js";

function isRequestBodyValid(reqBody, requiredFields) {
    return requiredFields.every(field => reqBody[field] !== null && reqBody[field] !== undefined && reqBody[field] !== '');
}

router.post("/email", (req, res) => {
    const requiredFields = ['name', 'email', 'password'];
    const isValid = isRequestBodyValid(req.body, requiredFields);

    if (!isValid) {
        res.json({
            error: "Requisição inválida. Os campos 'name', 'email' e 'password' são obrigatórios."
        })

        return;
    }

    console.log("REQUEST___", req.body);

    let emailCompany = "marcosjesus.dev@gmail.com";
    let emailTitle = "SOSSA RECUPERAÇÃO DE SENHA";
    const text =  "Olá " + req.body.name + ", tudo bem?";

    const bodyEmail = {
        from: emailCompany,
        to: req.body.email,
        subject: emailTitle,
        text: text
    }

    emailService.sendEmail(bodyEmail);

    res.json({
        message: "Email enviado com sucesso!"
    })

});

export default router;