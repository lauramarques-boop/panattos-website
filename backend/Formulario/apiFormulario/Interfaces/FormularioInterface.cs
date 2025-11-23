namespace apiFormulario.Interfaces;

using apiFormulario.Models;

public interface IFormularioService
{
    Task<bool> ProcessFormulario(FormularioModel formulario);
}
