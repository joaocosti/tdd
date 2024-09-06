class Aluno {
    determinarAprovacao(frequencia, notaFinal, notaEspecial) {
        const MENSAGEM_REPROVADO = 'Reprovado';
        const MENSAGEM_APROVADO = 'Aprovado';

        if (frequencia < 0 || notaFinal < 0 || notaEspecial < 0) {
            return MENSAGEM_REPROVADO;
        } else if (frequencia < 75) {
            return MENSAGEM_REPROVADO;
        } else if (notaFinal >= 60) {
            return MENSAGEM_APROVADO;
        }

        const MEDIA = (notaFinal + notaEspecial) / 2;
        return MEDIA >= 60 ? MENSAGEM_APROVADO : MENSAGEM_REPROVADO;
    }
}

module.exports = Aluno;