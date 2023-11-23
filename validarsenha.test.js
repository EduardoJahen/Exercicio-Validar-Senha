const validarSenha = require('./validarsenha'); // Importe sua função

// Teste para senha que atende a todos os critérios
test('Senha válida que atende a todos os critérios deve retornar true', () => {
  const senha = 'Senha1234!';
  expect(validarSenha(senha)).toBe(true);
});
