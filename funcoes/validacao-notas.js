class Aluno {
    determinarAprovacao(frequencia, notaFinal, notaEspecial) {
        const MENSAGEM_REPROVADO = 'Reprovado';
        const MENSAGEM_APROVADO = 'Aprovado';

        if (frequencia < 75)
            return MENSAGEM_REPROVADO;
        else if (notaFinal >= 60)
            return MENSAGEM_APROVADO;
        else if(((notaFinal+ notaEspecial)/2) < 60)
            return MENSAGEM_REPROVADO
        else if(((notaFinal+ notaEspecial)/2) >= 60)
            return MENSAGEM_APROVADO
        return 0
    }
}

module.exports = Aluno;