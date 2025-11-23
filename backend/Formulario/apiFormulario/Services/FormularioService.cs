using apiFormulario.Interfaces;
using apiFormulario.Settings;
using apiFormulario.Models;
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;

namespace apiFormulario.Services;

public class FormularioService : IFormularioService
{

    private readonly EmailSettings _emailSettings;
    private readonly ILogger<FormularioService> _logger;

    public FormularioService(EmailSettings emailSettings, ILogger<FormularioService> logger)
    {
        _emailSettings = emailSettings;
        _logger = logger;
    }

    public async Task<bool> ProcessFormulario(FormularioModel formulario)
    {
        var nomeCompleto = formulario.NomeCompleto;
        var destinatario = formulario.Email;
        var assunto = formulario.Assunto;
        var cidade = formulario.Cidade;
        var telefone = formulario.Telefone;
        var empresa = formulario.Empresa ?? "Não informada";
        var mensagem = formulario.Mensagem ?? "Nenhuma mensagem adicional";

        var assuntoEmail = $"Novo Contato - {assunto}";
        var corpo = $@"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
        .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
        .info-box {{ background: white; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 8px; }}
        .info-row {{ margin: 10px 0; }}
        .info-label {{ font-weight: bold; color: #667eea; }}
        .message-box {{ background: white; border: 2px solid #e0e0e0; padding: 20px; margin: 20px 0; border-radius: 8px; }}
        .footer {{ text-align: center; margin-top: 30px; color: #666; font-size: 12px; }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>📩 Novo Contato Recebido</h1>
            <p>Formulário de Contato - Panattos</p>
        </div>
        <div class='content'>
            <h2>Informações do Contato</h2>
            
            <div class='info-box'>
                <div class='info-row'>
                    <span class='info-label'>Assunto:</span> {assunto}
                </div>
                <div class='info-row'>
                    <span class='info-label'>Nome Completo:</span> {nomeCompleto}
                </div>
                <div class='info-row'>
                    <span class='info-label'>Email:</span> {destinatario}
                </div>
                <div class='info-row'>
                    <span class='info-label'>Telefone:</span> {telefone}
                </div>
                <div class='info-row'>
                    <span class='info-label'>Cidade:</span> {cidade}
                </div>
                <div class='info-row'>
                    <span class='info-label'>Empresa:</span> {empresa}
                </div>
            </div>
            
            <h3>Mensagem:</h3>
            <div class='message-box'>
                {mensagem}
            </div>
        </div>
        <div class='footer'>
            <p>Este é um email automático do sistema de contato.</p>
            <p>© 2025 Panattos - Todos os direitos reservados</p>
        </div>
    </div>
</body>
</html>";

        try
        {
            _logger.LogInformation("Iniciando envio de email para {Destinatario}", destinatario);
            await EnviarEmail(destinatario, assuntoEmail, corpo);
            _logger.LogInformation("Email enviado com sucesso para {Destinatario}", destinatario);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error sending email");
            return false;
        }
    }

    private async Task EnviarEmail(string destinatario, string assunto, string corpoHtml)
    {
        if (string.IsNullOrEmpty(_emailSettings.Username) ||
            string.IsNullOrEmpty(_emailSettings.Password))
        {
            _logger.LogWarning("⚠️  CONFIGURAÇÃO DE EMAIL INVÁLIDA!");
            _logger.LogWarning("  └─ As credenciais de email no appsettings.json não foram configuradas.");
            throw new Exception("Configurações de email não foram definidas no appsettings.json");
        }

        var message = new MimeMessage();
        message.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
        message.To.Add(new MailboxAddress("", destinatario));
        message.Subject = assunto;

        var bodyBuilder = new BodyBuilder();
        bodyBuilder.HtmlBody = corpoHtml;
        message.Body = bodyBuilder.ToMessageBody();

        using (var client = new SmtpClient())
        {
            // Accept all SSL certificates (not recommended for production)
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;

            _logger.LogInformation("Conectando ao servidor SMTP {SmtpServer}:{SmtpPort}", _emailSettings.SmtpServer, _emailSettings.SmtpPort);
            await client.ConnectAsync(_emailSettings.SmtpServer, _emailSettings.SmtpPort, SecureSocketOptions.StartTls);

            _logger.LogInformation("Autenticando com usuário {Username}", _emailSettings.Username);
            await client.AuthenticateAsync(_emailSettings.Username, _emailSettings.Password);

            _logger.LogInformation("Enviando mensagem...");
            await client.SendAsync(message);

            _logger.LogInformation("Desconectando...");
            await client.DisconnectAsync(true);
        }
    }
}
