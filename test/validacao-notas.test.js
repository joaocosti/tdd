const Aluno = require('../funcoes/validacao-notas');

let ALUNO
beforeAll(() => {
    ALUNO = new Aluno();
});

describe('Teste do metodo determinarAprovacao - Casos Base', () => {

    test('Frequencia menor que 75', () => {
        expect(ALUNO.determinarAprovacao(74, 100, 100)).toEqual('Reprovado');
    });

    test('Nota Final igual a 60', () => {
        expect(ALUNO.determinarAprovacao(100, 60, 100)).toEqual('Aprovado');
    });
});


