module.exports = {
    formatDate(data){
        // Seleciona as primeiras posições da data considerando o formato 00/00/0000
        let date = data.slice(0,11)
        // Transforma em objeto data e utiliza a função toLocal para exibir no formato brasileiro
        date = new Date(date).toLocaleDateString('pt-br')
        // Adicionando o formato da data como dd-mm-aaaa
        date = date.replace(/\//g, "-")
        // Retorna a data formatada
        return date
    },

    geraGUID(){
        // Realiza a requisição do objeto GUID da biblioteca js-guid
        const { Guid } = require('js-guid');
        // Gera um guid e transforma em string
        let guid = new Guid().toString()
        // Retorna o identificador guid
        return guid
    },

    caixaAlta(frase){
        // Substitui as palavras "Chuck" e "Norris" por "CHUCK" e "NORRIS" na frase
        frase = frase.replace("Chuck", "CHUCK")
        frase = frase.replace("Norris", "NORRIS")
        // Retorna a frase com as substituições
        return frase
    },

    acessibilidade(numero){
        // Transforma o parâmetro em float
        numero = parseFloat(numero)
        // Multiplica por 100 para exibir como inteiro
        numero *= 100
        // Retorna o número com o símbolo da porcentagem
        return `${numero}%`
    }
}

