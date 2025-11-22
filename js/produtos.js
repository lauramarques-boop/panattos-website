// 1. BANCO DE DADOS DE PRODUTOS (Simulação)
// Categorias: biscoitos, confeitaria, paes, roscas, salgados-assados, salgados-fritos
const produtosDB = [
  // BISCOITOS
      {
        id: 1,
        titulo: "Biscoito Cascudo",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BISCOITO CASCUDO MASSA-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 2,
        titulo: "Biscoito Cascudo Mini",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BISCOITO CASCUDO MINI-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 3,
        titulo: "Biscoito de Queijo Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BISCOITO DE QUEIJO LANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 4,
        titulo: "Biscoito de Queijo Super Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BISCOITO DE QUEIJO SUPERLANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 5,
        titulo: "Biscoito de Queijo Tradicional",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BISCOITO DE QUEIJO TRADICIONAL-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 6,
        titulo: "Biscoito de Sal de Fritar",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BISCOITO DE SAL DE FRITAR-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 7,
        titulo: "Biscoito Doce de Fritar",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BISCOITO DOCE DE FRITAR-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 8,
        titulo: "Bolacha de Queijo",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BOLACHA DE QUEIJO-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 9,
        titulo: "Bolachinha de Queijo",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BOLACHINHA DE QUEIJO-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 10,
        titulo: "Broa Doce Coquetel",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BROA DOCE COQUETEL-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 11,
        titulo: "Broa Doce Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BROA DOCE LANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 12,
        titulo: "Broa Doce",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BROA DOCE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 13,
        titulo: "Broa Temperada Coquetel",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BROA TEMPERADA COQUETEL-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 14,
        titulo: "Broa Temperada Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BROA TEMPERADA LANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 15,
        titulo: "Broa Temperada",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/BROA TEMPERADA-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 16,
        titulo: "Pão de Queijo Coquetel",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO COQUETEL-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 17,
        titulo: "Pão de Queijo Hiper Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO HIPERLANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 18,
        titulo: "Pão de Queijo Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO LANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 19,
        titulo: "Pão de Queijo Palito 3 Queijos",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO PALITO 3 QUEIJOS-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 20,
        titulo: "Pão de Queijo Palito",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO PALITO-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 21,
        titulo: "Pão de Queijo Super Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO SUPERLANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 22,
        titulo: "Pão de Queijo Tradicional",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO TRADICIONAL-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 23,
        titulo: "Pão de Queijo Vó Jovita Tradicional",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO VO JOVITA TRADICIONAL-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 24,
        titulo: "Pão de Queijo Vó Jovita Lanche",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO VO JOVITA LANCHE-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },
    {
        id: 25,
        titulo: "Pão de Queijo Vó Jovita Coquetel",
        categoria: "biscoitos",
        img: "../assets/images/produtos/biscoitos/PAO DE QUEIJO VO JOVITA COQUETEL-min.png",
        descricao: "Aquele biscoito de queijo assado, crocante e saboroso, ideal para acompanhar um café preto.",
        detalhes: ["Pacote: 1kg, 3kg", "Ingredientes selecionados", "Zero Glúten"]
    },


    // CONFEITARIA
      {
        id: 26,
        titulo: "Bolo Cremoso de Fubá",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO CREMOSO DE FUBA-min.png",
        descricao: "Bolo caseirinho de fubá. Sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 27,
        titulo: "Bolo de Fubá",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO DE FUBA-min.png",
        descricao: "Bolo caseirinho de fubá. Sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 28,
        titulo: "Bolo de Cenoura",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO DE CENOURA1-min.png",
        descricao: "Bolo caseirinho de cenoura. Sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 29,
        titulo: "Bolo de Chocolate",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO DE CHOCOLATE2-min.png",
        descricao: "Bolo caseirinho de chocolate. Sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 30,
        titulo: "Bolo de Mandioca",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO DE MANDIOCA-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 31,
        titulo: "Bolo de Milho",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO DE MILHO1-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 32,
        titulo: "Bolo de Queijo",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO DE QUEIJO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 33,
        titulo: "Bolo Red Velvet",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO RED VELVET2-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 34,
        titulo: "Bolo Sabor Abacaxi",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO SABOR ABACAXI-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 35,
        titulo: "Bolo Sabor Coco",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO SABOR COCO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 36,
        titulo: "Bolo Sabor Laranja",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO SABOR LARANJA2-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 37,
        titulo: "Bolo Sabor Limão",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/BOLO SABOR LIMAO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 38,
        titulo: "Casadinho",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/CASADINHO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 39,
        titulo: "Nhoque",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/NHOQUE-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 40,
        titulo: "Pudim de Leite Condensado",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/PUDIM DE LEITE CONDENSADO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 41,
        titulo: "Pudim de Queijo",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/PUDIM DE QUEIJO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 42,
        titulo: "Rocambole de Brigadeiro",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/ROCAMBOLE BRIGADEIRO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 43,
        titulo: "Rocambole de Coco",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/ROCAMBOLE COCO-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },
    {
        id: 44,
        titulo: "Rocambole de Doce de Leite",
        categoria: "confeitaria",
        img: "../assets/images/produtos/confeitaria/ROCAMBOLE DOCE DE LEITE-min.png",
        descricao: "Bolo caseirinho com sabor de infância.",
        detalhes: ["Peso: 350g", "Pronto para consumo", "Manter refrigerado"]
    },


    // PAES
    {
        id: 45,
        titulo: "Baguete",
        categoria: "paes",
        img: "../assets/images/produtos/paes/BAGUETE 200 FERM CURTA OU LONGA1-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 46,
        titulo: "Baguete Mini",
        categoria: "paes",
        img: "../assets/images/produtos/paes/BAGUETE 100 FERM CURTA OU LONGA1-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 47,
        titulo: "Baguetinha Fibras",
        categoria: "paes",
        img: "../assets/images/produtos/paes/BAGUETINHA FIBRAS FER CURTA-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 48,
        titulo: "Baguetinha Integral",
        categoria: "paes",
        img: "../assets/images/produtos/paes/BAGUETINHA INTEGRAL FERM CURTA-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 49,
        titulo: "Pão Integral Temperado",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO 100 INTEGRAL TEMPERADO-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 50,
        titulo: "Pão Australiano",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO AUSTRALIANO-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 51,
        titulo: "Pão de Batata",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO DE BATATA-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 52,
        titulo: "Pão de Cacau",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO DE CACAU-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 53,
        titulo: "Pão de Leite",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO DE LEITE-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 54,
        titulo: "Pão de Tomate Seco",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO DE TOMATE SECO-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 55,
        titulo: "Pão Doce",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO DOCE ESPECIAL-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 56,
        titulo: "Pão Francês",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO FRANCES-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 57,
        titulo: "Pão Francês Integral",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO FRANCES 100 INTEGRAL-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 58,
        titulo: "Pão Francês Fibras",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO FRANCES FIBRAS-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 59,
        titulo: "Pão Francês Panhoca",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO FRANCES PANHOCA-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },
    {
        id: 60,
        titulo: "Pão Hambúrguer",
        categoria: "paes",
        img: "../assets/images/produtos/paes/PAO HAMBURGUER-min.png",
        descricao: "Praticidade para sua padaria, pronto para fermentar e assar.",
        detalhes: ["Peso: 58g cru", "Caixa: 100 unidades", "Fermentação necessária"]
    },


    // ROSCAS
    {
        id: 61,
        titulo: "Massa Doce Dourada",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/MASSA DOCE DOURADA1-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 62,
        titulo: "Rosca Grande Comprida",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSCA GRANDE COMPRIDA-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 63,
        titulo: "Rosca Grande Redonda",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSCA GRANDE REDONDA-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 64,
        titulo: "Rosca Média Comprida",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSCA MEDIA COMPRIDA-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 65,
        titulo: "Rosquinha Comprida Mini",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSQUINHA COMPRIDA MINI-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 66,
        titulo: "Rosquinha Comprida",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSQUINHA COMPRIDA-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 67,
        titulo: "Rosquinha de Queijo",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSQUINHA DE QUEIJO-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 68,
        titulo: "Rosquinha do Amor",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSQUINHA DO AMOR-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 69,
        titulo: "Rosquinha de Maracujá",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSQUINHA MARACUJA-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },
    {
        id: 70,
        titulo: "Rosquinha de Queijo e Goiabada",
        categoria: "roscas",
        img: "../assets/images/produtos/roscas/ROSQUINHA QUEIJO E GOIABADA-min.png",
        descricao: "Perfeita para o café da tarde em família.",
        detalhes: ["Peso: 400g", "Assada na hora", "Validade: 5 dias"]
    },


    // SALGADOS ASSADOS
      {
        id: 71,
        titulo: "Bauru Chinês",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/BAURU CHINES-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 72,
        titulo: "Bauru de Frango",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/BAURU DE FRANGO-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 73,
        titulo: "Bauruzinho Chinês",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/BAURUZINHO CHINES-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 74,
        titulo: "Bauruzinho de Frango",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/BAURUZINHO CHINES-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 75,
        titulo: "Croissant",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/CROISSANT-min.png",
        descricao: "Abacaxi com Bacon; Apresuntado e Queijo; Banana e Canela; Chocolate; Frango e Requeijão; Queijo e Goiabada",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 76,
        titulo: "Doguinho Coquetel",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/DOGUINHO COQUETEL-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 77,
        titulo: "Empada de Frango",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/EMPADA FRANGO COQUETEL-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 78,
        titulo: "Esfirra Bovina",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/ESFIRRA1-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 79,
        titulo: "Hambúrguer Grelhado",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/HAMBURGUER GRELHADO-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },
    {
        id: 80,
        titulo: "Massa de Pizza",
        categoria: "salgados-assados",
        img: "../assets/images/produtos/salgados/assados/MASSA PIZZA1-min.png",
        descricao: "Crocante por fora e macio por dentro.",
        detalhes: ["Peso: 1kg", "Embalagem: Pacote", "Validade: 90 dias (congelado)"]
    },


    // SALGADOS FRITOS
    {
        id: 81,
        titulo: "Bodas de Carne",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/BODAS CARNE BOVINA-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 82,
        titulo: "Bodas de Pizza Coquetel",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/BODAS PIZZA COQUETEL-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 83,
        titulo: "Bodas de Requeijão Coquetel",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/BODAS REQUEIJAO COQUETEL-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 84,
        titulo: "Bolinha de Queijo",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/BOLINHA DE QUEIJO-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 85,
        titulo: "Bolinho de Arroz",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/BOLINHO DE ARROZ-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 86,
        titulo: "Bolinho de Mandioca",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/BOLINHO MANDIOCA-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 87,
        titulo: "Churros Doce Coquetel",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/CHURROS DOCE COQUETEL-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 88,
        titulo: "Coxinha Coquetel",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/COXINHA COQUETEL-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 89,
        titulo: "Coxinha",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/COXINHA-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },
    {
        id: 90,
        titulo: "Quibe",
        categoria: "salgados-fritos",
        img: "../assets/images/produtos/salgados/fritos/QUIBE-min.png", 
        descricao: "A queridinha das lanchonetes.",
        detalhes: ["Pacotes: Embalagens 1kg, 3kg"]
    },

    // Adicione mais produtos aqui seguindo o modelo
];

// ... MANTENHA O ARRAY produtosDB ACIMA DISSO ...

// 2. VARIÁVEIS DE CONTROLE
const gridProdutos = document.getElementById('gridProdutos');
const searchInput = document.getElementById('searchInput');
const btnsFiltro = document.querySelectorAll('.btn-filtro');
const msgSemResultados = document.getElementById('msgSemResultados');

// Elementos do Modal
const modal = document.getElementById('modalProduto');
const btnFecharModal = document.getElementById('btnFecharModal');
const modalImg = document.getElementById('modalImg');
const modalTitulo = document.getElementById('modalTitulo');
const modalDesc = document.getElementById('modalDesc');
const modalBadge = document.getElementById('modalBadge');
const modalListaDetalhes = document.getElementById('modalListaDetalhes');

// Imagem padrão caso a original não exista
const IMG_PLACEHOLDER = 'https://placehold.co/600x400?text=Imagem+Indisponível';

// 3. FUNÇÃO PARA RENDERIZAR OS PRODUTOS
function renderizarProdutos(lista) {
    gridProdutos.innerHTML = ''; // Limpa o grid

    if (lista.length === 0) {
        msgSemResultados.style.display = 'block';
        return;
    } else {
        msgSemResultados.style.display = 'none';
    }

    lista.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card-produto';
        
        // Tratamento para caminho da imagem (segurança)
        const imgSrc = produto.img ? produto.img : IMG_PLACEHOLDER;

        card.innerHTML = `
            <div class="img-produto" style="height: 220px; overflow: hidden; cursor: pointer; position: relative; background: #f4f4f4;">
                <img src="${imgSrc}" 
                     alt="${produto.titulo}" 
                     style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;"
                     onerror="this.onerror=null;this.src='${IMG_PLACEHOLDER}';"
                >
            </div>
            <div class="conteudo-produto" style="padding: 1.5rem;">
                <span style="font-size: 0.75rem; color: var(--cor-primaria); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                    ${formatarCategoria(produto.categoria)}
                </span>
                <h3 class="titulo-produto">${produto.titulo}</h3>
                <button class="btn btn-outline btn-full btn-abrir-modal" data-id="${produto.id}" style="margin-top: 0.5rem;">
                    Ver Detalhes
                </button>
            </div>
        `;

        // Eventos
        const btnDetalhes = card.querySelector('.btn-abrir-modal');
        const imgClick = card.querySelector('.img-produto');
        
        function abrir() { abrirModal(produto); }
        
        btnDetalhes.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita bugs de clique duplo
            abrir();
        });
        imgClick.addEventListener('click', abrir);

        gridProdutos.appendChild(card);
    });
}

function formatarCategoria(cat) {
    if (!cat) return '';
    return cat.replace(/-/g, ' ').toUpperCase();
}


// 4. SISTEMA DE FILTROS
btnsFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
        btnsFiltro.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.dataset.categoria;
        
        let filtrados;
        if (categoria === 'todos') {
            filtrados = produtosDB;
        } else {
            filtrados = produtosDB.filter(p => p.categoria === categoria);
        }
        
        // Limpa a busca ao clicar no filtro para não confundir o usuário
        searchInput.value = '';
        
        renderizarProdutos(filtrados);
    });
});


// 5. SISTEMA DE BUSCA
searchInput.addEventListener('input', (e) => { // 'input' é melhor que 'keyup' para mobile
    const termo = e.target.value.toLowerCase().trim();
    
    // Opcional: manter o filtro visualmente ou resetar. Aqui vamos resetar visualmente 'todos'
    if(termo.length > 0) {
         btnsFiltro.forEach(b => b.classList.remove('active'));
    }

    const filtrados = produtosDB.filter(p => 
        p.titulo.toLowerCase().includes(termo) || 
        p.categoria.replace('-', ' ').includes(termo)
    );

    renderizarProdutos(filtrados);
});


// 6. LÓGICA DO MODAL
function abrirModal(produto) {
    modalImg.src = produto.img || IMG_PLACEHOLDER;
    modalImg.onerror = function() { this.src = IMG_PLACEHOLDER; };
    
    modalTitulo.innerText = produto.titulo;
    modalDesc.innerText = produto.descricao;
    modalBadge.innerText = formatarCategoria(produto.categoria);
    
    // Limpa e cria a lista de detalhes
    modalListaDetalhes.innerHTML = '';
    if (produto.detalhes && produto.detalhes.length > 0) {
        produto.detalhes.forEach(item => {
            const li = document.createElement('li');
            // Adiciona um ícone genérico (check) antes do item
            li.innerHTML = `<i class="fa-solid fa-check"></i> ${item}`;
            modalListaDetalhes.appendChild(li);
        });
    } else {
        modalListaDetalhes.innerHTML = '<li>Sem detalhes adicionais.</li>';
    }

    modal.classList.add('ativo');
    document.body.style.overflow = 'hidden'; 
}

function fecharModal() {
    modal.classList.remove('ativo');
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 300); // Espera a animação terminar
}

btnFecharModal.addEventListener('click', fecharModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('ativo')) {
        fecharModal();
    }
});

// 7. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(produtosDB);
});