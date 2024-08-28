import dotenv from 'dotenv';
dotenv.config();

import nodemailer from "nodemailer";
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, '../../template/body.html');
const contentHTML = fs.readFileSync(filepath, 'utf8');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "marcosjesus.dev@gmail.com",
              pass: "pebyvijdxtwegvsz",
            }
        });
    }

    sendEmail(email) {
        try {
            this.transporter.sendMail({
                from: email.from,
                to: email.to,
                subject: email.subject,
                text: email.text,
                html: contentHTML
            })
        } catch (error) {
            console.log("ERRO",error);
        }
    }   
}

export default new EmailService();
