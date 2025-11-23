namespace apiFormulario.Controllers;

using Microsoft.AspNetCore.Mvc;
using apiFormulario.Interfaces;
using apiFormulario.Models;

[ApiController]
[Route("api/[controller]")]
public class FormularioController : ControllerBase
{
    private readonly IFormularioService _formularioService;
    private readonly ILogger<FormularioController> _logger;

    public FormularioController(IFormularioService formularioService, ILogger<FormularioController> logger)
    {
        _formularioService = formularioService;
        _logger = logger;
    }

    [HttpPost("submit")]
    public async Task<IActionResult> SubmitFormulario([FromBody] FormularioModel formulario)
    {
        _logger.LogInformation("Recebendo submissão de formulário.");

        if (formulario == null)
        {
            _logger.LogWarning("Dados do formulário nulos.");
            return BadRequest("Formulario data is null.");
        }

        _logger.LogInformation("Processando formulário de: {NomeCompleto}, Email: {Email}, Assunto: {Assunto}",
            formulario.NomeCompleto, formulario.Email, formulario.Assunto);

        var result = await _formularioService.ProcessFormulario(formulario);

        if (result)
        {
            _logger.LogInformation("Formulário processado com sucesso.");
            return Ok("Formulario submitted successfully.");
        }
        else
        {
            _logger.LogError("Erro ao processar formulário.");
            return StatusCode(500, "An error occurred while processing the formulario.");
        }
    }
}
