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
interface ImailService {
  sendMail(resquest: ImessageDTO): void;
}

// Data Transfer Object (DDD)

class EmailService implements ImailService {
  sendMail({ to, message }: ImessageDTO) {
    console.log("email enviado para ${to.name}: ${message.subject}");
  }
}

export default EmailService;
