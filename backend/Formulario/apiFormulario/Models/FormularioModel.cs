namespace apiFormulario.Models;

using System.ComponentModel.DataAnnotations;

public class FormularioModel
{
    [Required(ErrorMessage = "Assunto é obrigatório")]
    public AssuntoEnum Assunto { get; set; }

    [Required(ErrorMessage = "Nome Completo é obrigatório")]
    public required string NomeCompleto { get; set; }

    public string? Empresa { get; set; }

    [Required(ErrorMessage = "Cidade é obrigatória")]
    public required string Cidade { get; set; }

    [Required(ErrorMessage = "Telefone é obrigatório")]
    public required string Telefone { get; set; }

    [Required(ErrorMessage = "E-mail é obrigatório")]
    [EmailAddress(ErrorMessage = "E-mail inválido")]
    public required string Email { get; set; }

    public string? Mensagem { get; set; }
}