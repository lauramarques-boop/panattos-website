using apiFormulario.Interfaces;
using apiFormulario.Services;
using apiFormulario.Settings;

var builder = WebApplication.CreateBuilder(args);

// --- Serviços ---
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS: Permissão total (AllowAll)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});

// Configurações e Injeção de Dependência
var emailSettings = new EmailSettings();
builder.Configuration.GetSection("EmailSettings").Bind(emailSettings);
builder.Services.AddSingleton(emailSettings);

builder.Services.AddScoped<IFormularioService, FormularioService>();

var app = builder.Build();

// --- Pipeline ---

// Swagger ativo em qualquer ambiente (Dev e Prod)
app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
