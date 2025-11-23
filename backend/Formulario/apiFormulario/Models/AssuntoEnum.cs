namespace apiFormulario.Models;

using System.ComponentModel.DataAnnotations;

public enum AssuntoEnum
{
    [Display(Name = "Quero ser cliente")]
    QueroSerCliente,

    [Display(Name = "Novos Produtos")]
    NovosProdutos,

    [Display(Name = "Dúvidas sobre minha entrega")]
    DuvidasSobreMinhaEntrega,

    [Display(Name = "Dúvidas sobre comodatos")]
    DuvidasSobreComodatos,

    [Display(Name = "2ª via de Nota Fiscal")]
    SegundaViaNotaFiscal,

    [Display(Name = "Defeitos em equipamentos")]
    DefeitosEmEquipamentos,

    [Display(Name = "Reclamações")]
    Reclamacoes,

    [Display(Name = "Sugestões e Elogios")]
    SugestoesEElogios,

    [Display(Name = "Outros")]
    Outros
}
