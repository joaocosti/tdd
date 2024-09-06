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

describe('Teste do metodo determinarAprovacao - Demais Casos', () => {

    test('Frequência > 75%, Nota Final < 60, mas média com Nota Especial >= 60', () => {
        expect(ALUNO.determinarAprovacao(76, 50, 70)).toEqual('Aprovado');
    });

    test('Frequência > 75%, Nota Final < 60 e Média com Nota Especial < 60', () => {
        expect(ALUNO.determinarAprovacao(76, 59, 59)).toEqual('Reprovado');
    });
});

describe('Teste do metodo determinarAprovacao - Casos excepcionais ', () => {
    test('Frequência,Nota Final e Nota Especial negativos', () => {
        expect(ALUNO.determinarAprovacao(-1, 80, 80)).toEqual('Reprovado');
        expect(ALUNO.determinarAprovacao(75, -1, 80)).toEqual('Reprovado');
        expect(ALUNO.determinarAprovacao(75, 80, -1)).toEqual('Reprovado');
    });
});



