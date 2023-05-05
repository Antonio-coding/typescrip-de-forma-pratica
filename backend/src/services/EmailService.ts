interface IMailTo {
  name: string;
  email: string;
}
interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}
interface ImessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

// Data Transfer Object (DDD)

class EmailService {
  sendMail({ to, message }: ImessageDTO) {
    console.log("email enviado para ${to.name}: ${message.subject}");
  }
}

export default EmailService;
