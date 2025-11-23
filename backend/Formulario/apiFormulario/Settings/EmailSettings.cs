namespace apiFormulario.Settings;

/// <summary>
/// Configurações SMTP para envio de emails.
/// Essas configurações são carregadas do appsettings.json.
/// </summary>
public class EmailSettings
{
    /// <summary>
    /// Servidor SMTP (ex: smtp.gmail.com)
    /// </summary>
    public string SmtpServer { get; set; } = string.Empty;

    /// <summary>
    /// Porta SMTP (geralmente 587 para TLS ou 465 para SSL)
    /// </summary>
    public int SmtpPort { get; set; }

    /// <summary>
    /// Email do remetente
    /// </summary>
    public string SenderEmail { get; set; } = string.Empty;

    /// <summary>
    /// Nome exibido como remetente
    /// </summary>
    public string SenderName { get; set; } = string.Empty;

    /// <summary>
    /// Usuário para autenticação SMTP
    /// </summary>
    public string Username { get; set; } = string.Empty;

    /// <summary>
    /// Senha para autenticação SMTP (use "Senha de App" para Gmail)
    /// </summary>
    public string Password { get; set; } = string.Empty;

    /// <summary>
    /// Usar SSL/TLS (recomendado: true)
    /// </summary>
    public bool UseSsl { get; set; } = true;
}
