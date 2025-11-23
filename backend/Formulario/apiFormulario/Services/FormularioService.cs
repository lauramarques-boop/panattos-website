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
        if (formulario == null)
        {
            _logger.LogWarning("Formulário recebido é nulo");
            return false;
        }

        bool empresaEnviada = false;
        bool clienteEnviada = false;

        try
        {
            try
            {
                _logger.LogInformation("Enviando email de notificação para a empresa...");
                await EnviarEmailParaEmpresa(formulario);
                empresaEnviada = true;
                _logger.LogInformation("Email enviado com sucesso para a empresa");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro ao enviar email para a empresa");
            }

            try
            {
                _logger.LogInformation("Enviando email de confirmação para o cliente {Email}...", formulario.Email);
                await EnviarEmailParaCliente(formulario);
                clienteEnviada = true;
                _logger.LogInformation("Email de confirmação enviado para o cliente");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Erro ao enviar email de confirmação para o cliente");
            }

            if (empresaEnviada || clienteEnviada)
            {
                _logger.LogInformation("Processamento concluído: Empresa={EmpresaStatus}, Cliente={ClienteStatus}", 
                    empresaEnviada ? "OK" : "FALHOU", 
                    clienteEnviada ? "OK" : "FALHOU");
                return true;
            }
            else
            {
                _logger.LogError("Falha ao enviar ambos os emails");
                return false;
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Erro geral ao processar formulário");
            return false;
        }
    }

    private async Task EnviarEmailParaEmpresa(FormularioModel formulario)
    {
        ValidarConfiguracoesEmail();

        var nomeCompleto = formulario.NomeCompleto;
        var emailCliente = formulario.Email;
        var assunto = formulario.Assunto;
        var cidade = formulario.Cidade;
        var telefone = formulario.Telefone;
        var empresa = formulario.Empresa ?? "Não informada";
        var mensagem = formulario.Mensagem ?? "Nenhuma mensagem adicional";

        var assuntoEmail = $"Novo Contato - {assunto}";
        var corpoHtml = GerarEmailNotificacaoEmpresa(nomeCompleto, emailCliente, assunto, cidade, telefone, empresa, mensagem);

        await EnviarEmailGenerico(_emailSettings.EmpresaEMail, assuntoEmail, corpoHtml);
    }

    private async Task EnviarEmailParaCliente(FormularioModel formulario)
    {
        ValidarConfiguracoesEmail();

        var assuntoEmail = "Recebemos seu contato - Panattos";
        var corpoHtml = GerarEmailConfirmacaoCliente(formulario.NomeCompleto, formulario.Assunto);

        await EnviarEmailGenerico(formulario.Email, assuntoEmail, corpoHtml);
    }

    private string GerarEmailNotificacaoEmpresa(string nomeCompleto, string emailCliente, AssuntoEnum assunto, 
        string cidade, string telefone, string empresa, string mensagem)
    {
        return $@"
<!DOCTYPE html>
<html>
<head>
    <link href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600;700&display=swap' rel='stylesheet'>
    <style>
        body {{ font-family: 'Fira Sans', Arial, sans-serif; line-height: 1.6; color: #2D2D2D; background-color: #FDFDFA; margin: 0; padding: 0; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FDFDFA; }}
        .header {{ background: linear-gradient(135deg, #D21C1A 0%, #8C1913 100%); color: #FFFFFF; padding: 40px 30px; text-align: center; border-radius: 0.75rem 0.75rem 0 0; }}
        .header h1 {{ margin: 0; font-size: 28px; font-weight: 700; color: #FFFFFF; }}
        .header p {{ margin: 10px 0 0; font-size: 16px; color: #FDFDFA; opacity: 0.95; }}
        .content {{ background: #FFFFFF; padding: 35px 30px; border-radius: 0 0 0.75rem 0.75rem; box-shadow: 0 2px 8px rgba(210, 28, 26, 0.08); }}
        .content h2 {{ color: #D21C1A; font-size: 22px; font-weight: 600; margin: 0 0 20px 0; border-bottom: 2px solid #E0AE32; padding-bottom: 10px; }}
        .info-box {{ background: #FDFDFA; border-left: 4px solid #D21C1A; padding: 20px; margin: 20px 0; border-radius: 0.25rem; }}
        .info-row {{ margin: 12px 0; font-size: 15px; }}
        .info-label {{ font-weight: 600; color: #8C1913; display: inline-block; min-width: 130px; }}
        .info-value {{ color: #2D2D2D; }}
        .message-box {{ background: #FDFDFA; border: 2px solid #E4E4E7; padding: 20px; margin: 20px 0; border-radius: 0.25rem; color: #555555; line-height: 1.7; }}
        .content h3 {{ color: #8C1913; font-size: 18px; font-weight: 600; margin: 25px 0 10px 0; }}
        .footer {{ text-align: center; margin-top: 30px; padding: 20px; color: #555555; font-size: 13px; }}
        .footer p {{ margin: 5px 0; }}
        .gold-accent {{ color: #E0AE32; font-weight: 600; }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>📩 Novo Contato Recebido</h1>
            <p>Formulário de Contato - <span class='gold-accent'>Panattos Equipamentos</span></p>
        </div>
        <div class='content'>
            <h2>Informações do Contato</h2>
            
            <div class='info-box'>
                <div class='info-row'>
                    <span class='info-label'>Assunto:</span>
                    <span class='info-value'>{assunto}</span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>Nome Completo:</span>
                    <span class='info-value'>{nomeCompleto}</span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>Email:</span>
                    <span class='info-value'>{emailCliente}</span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>Telefone:</span>
                    <span class='info-value'>{telefone}</span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>Cidade:</span>
                    <span class='info-value'>{cidade}</span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>Empresa:</span>
                    <span class='info-value'>{empresa}</span>
                </div>
            </div>
            
            <h3>Mensagem:</h3>
            <div class='message-box'>
                {mensagem}
            </div>
        </div>
        <div class='footer'>
            <p>Este é um email automático do sistema de contato.</p>
            <p>© 2025 <strong>Panattos Equipamentos</strong> - Todos os direitos reservados</p>
        </div>
    </div>
</body>
</html>";
    }

    private string GerarEmailConfirmacaoCliente(string nomeCompleto, AssuntoEnum assunto)
    {
        return $@"
<!DOCTYPE html>
<html>
<head>
    <link href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600;700&display=swap' rel='stylesheet'>
    <style>
        body {{ font-family: 'Fira Sans', Arial, sans-serif; line-height: 1.6; color: #2D2D2D; background-color: #FDFDFA; margin: 0; padding: 0; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FDFDFA; }}
        .header {{ background: linear-gradient(135deg, #D21C1A 0%, #8C1913 100%); color: #FFFFFF; padding: 40px 30px; text-align: center; border-radius: 0.75rem 0.75rem 0 0; position: relative; }}
        .check-icon {{ font-size: 52px; margin-bottom: 10px; }}
        .header h1 {{ margin: 10px 0 5px; font-size: 28px; font-weight: 700; color: #FFFFFF; }}
        .header p {{ margin: 5px 0 0; font-size: 16px; color: #FDFDFA; opacity: 0.95; }}
        .content {{ background: #FFFFFF; padding: 35px 30px; border-radius: 0 0 0.75rem 0.75rem; box-shadow: 0 2px 8px rgba(210, 28, 26, 0.08); }}
        .content p {{ color: #2D2D2D; font-size: 15px; line-height: 1.7; margin: 15px 0; }}
        .highlight {{ background: linear-gradient(to right, #FFF9E6, #FDFDFA); border-left: 4px solid #E0AE32; padding: 25px; margin: 25px 0; border-radius: 0.25rem; }}
        .highlight p {{ margin: 8px 0; color: #2D2D2D; }}
        .highlight strong {{ color: #D21C1A; }}
        .phone-box {{ text-align: center; background: #FDFDFA; border: 2px solid #D21C1A; padding: 15px; margin: 25px 0; border-radius: 0.75rem; }}
        .phone-box p {{ font-size: 20px; color: #D21C1A; font-weight: 700; margin: 0; }}
        .signature {{ margin-top: 30px; padding-top: 20px; border-top: 2px solid #E4E4E7; }}
        .signature p {{ color: #555555; margin: 5px 0; }}
        .signature strong {{ color: #D21C1A; font-weight: 600; }}
        .footer {{ text-align: center; margin-top: 30px; padding: 20px; color: #555555; font-size: 13px; }}
        .footer p {{ margin: 5px 0; }}
        .gold-text {{ color: #E0AE32; font-weight: 600; }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <div class='check-icon'>✅</div>
            <h1>Recebemos seu contato!</h1>
            <p><span class='gold-text'>Panattos Equipamentos</span></p>
        </div>
        <div class='content'>
            <p>Olá <strong>{nomeCompleto}</strong>,</p>
            
            <div class='highlight'>
                <p><strong>Obrigado por entrar em contato conosco!</strong></p>
                <p>Recebemos sua mensagem sobre: <strong>{assunto}</strong></p>
            </div>
            
            <p>Nossa equipe analisará seu contato e retornaremos em breve com uma resposta personalizada.</p>
            
            <p>Se você tiver alguma dúvida urgente, entre em contato diretamente:</p>
            <div class='phone-box'>
                <p>(34) 3821-XXXX</p>
            </div>
            
            <div class='signature'>
                <p>Atenciosamente,</p>
                <p><strong>Equipe Panattos Equipamentos</strong></p>
            </div>
        </div>
        <div class='footer'>
            <p>Este é um email automático de confirmação.</p>
            <p>© 2025 <strong>Panattos Equipamentos</strong> - Todos os direitos reservados</p>
        </div>
    </div>
</body>
</html>";
    }

    private async Task EnviarEmailGenerico(string destinatario, string assunto, string corpoHtml)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
        message.To.Add(new MailboxAddress("", destinatario));
        message.Subject = assunto;

        var bodyBuilder = new BodyBuilder();
        bodyBuilder.HtmlBody = corpoHtml;
        message.Body = bodyBuilder.ToMessageBody();

        using (var client = new SmtpClient())
        {
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;

            _logger.LogInformation("Conectando ao servidor SMTP {SmtpServer}:{SmtpPort}", _emailSettings.SmtpServer, _emailSettings.SmtpPort);
            await client.ConnectAsync(_emailSettings.SmtpServer, _emailSettings.SmtpPort, SecureSocketOptions.StartTls);

            _logger.LogInformation("Autenticando com usuário {Username}", _emailSettings.Username);
            await client.AuthenticateAsync(_emailSettings.Username, _emailSettings.Password);

            _logger.LogInformation("Enviando mensagem para {Destinatario}...", destinatario);
            await client.SendAsync(message);

            _logger.LogInformation("Desconectando...");
            await client.DisconnectAsync(true);
        }
    }

    private void ValidarConfiguracoesEmail()
    {
        if (string.IsNullOrEmpty(_emailSettings.Username) ||
            string.IsNullOrEmpty(_emailSettings.Password))
        {
            _logger.LogWarning("CONFIGURACAO DE EMAIL INVALIDA!");
            _logger.LogWarning("As credenciais de email no appsettings.json nao foram configuradas.");
            throw new Exception("Configurações de email não foram definidas no appsettings.json");
        }

        if (string.IsNullOrEmpty(_emailSettings.EmpresaEMail))
        {
            _logger.LogWarning("EMAIL DA EMPRESA NAO CONFIGURADO!");
            _logger.LogWarning("O campo EmpresaEMail no appsettings.json nao foi configurado.");
            throw new Exception("Email da empresa não foi definido no appsettings.json");
        }
    }
}
