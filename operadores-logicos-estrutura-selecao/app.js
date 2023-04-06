const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitação para dirigir kart');
console.log('Alem das verificacaes, precisamos chacar se voce esta na lista de presenca');

readline.question('Qual o seu ano de nascimento?', ano => {
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readline.question('Voce tem halitacao? (sim/nao)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce nao tem habilicao para dirigir kart');
            }else{
                readline.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('Bem vindo Douglas');
                            break;
                        case 'Rafael':
                            console.log('Bem vindo rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista')        
                    }
                });
            }
        })
    }
})