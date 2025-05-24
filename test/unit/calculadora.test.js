const calculadora = require("../../models/calculadora.js");

test("2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("20 + 20 deveria retornar 40", () => {
  const resultado = calculadora.somar(20, 20);
  expect(resultado).toBe(40);
});

test("banana + 200 deveria retornar Erro", () => {
  const resultado = calculadora.somar("banana", 20);
  expect(resultado).toBe("Erro");
});
