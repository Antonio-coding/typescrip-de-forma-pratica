"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Data Transfer Object (DDD)
class EmailService {
    sendMail({ to, message }) {
        console.log("email enviado para ${to.name}: ${message.subject}");
    }
}
exports.default = EmailService;
