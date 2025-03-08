const quotes = [
    { 
        quote: "Programação é 1% inspiração e 99% depuração.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Se funciona, não toque.", 
        author: "Lei da TI" 
    },
    { 
        quote: "Aquele momento de terror quando você percebe que apagou a tabela errada do banco de dados.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Nada é impossível para quem não precisa testar o código.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Programação: onde um simples ponto e vírgula pode arruinar sua semana.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Se não tem bug, é porque ainda não testaram direito.", 
        author: "Desconhecido" 
    },
    { 
        quote: "TI é resolver problemas que você não criou para pessoas que não entendem.", 
        author: "Desconhecido" 
    },
    { 
        quote: "A senha é '123456' – disse ninguém seguro, nunca.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Meu código funciona! Mas não faço ideia do porquê.", 
        author: "Desconhecido" 
    },
    { 
        quote: "A vida de um programador é uma eterna luta entre fazer direito e fazer rápido.", 
        author: "Desconhecido" 
    },
    { 
        quote: "O código nunca mente, mas os comentários às vezes sim.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Backup é algo que você só lembra que precisa quando já é tarde demais.", 
        author: "Desconhecido" 
    },
    { 
        quote: "A Internet foi feita para aproximar as pessoas... e depois mostrar anúncios.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Você pode ser qualquer coisa na vida, mas por favor, não seja aquele que envia e-mails com anexos de 50MB.", 
        author: "Desconhecido" 
    },
    { 
        quote: "A melhor forma de aprender a programar é deletando acidentalmente todo o seu trabalho.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Sem café, sem código.", 
        author: "Todo programador" 
    },
    { 
        quote: "Se ao menos depuração fosse tão fácil quanto programar...", 
        author: "Desconhecido" 
    },
    { 
        quote: "A arte de programar consiste em transformar café em código.", 
        author: "Desconhecido" 
    },
    { 
        quote: "O problema entre o teclado e a cadeira é quase sempre o usuário.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Se algo está funcionando bem, tenha medo: um bug invisível pode estar à espreita.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Não sei se meu código é ruim ou se a internet ainda não inventou uma solução para ele.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Um programador é um ser que resolverá um problema que você não sabia que tinha de uma forma que você não entende.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Reiniciar resolve 90% dos problemas. O restante é culpa do usuário.", 
        author: "Desconhecido" 
    },
    { 
        quote: "O melhor código é aquele que nunca precisou ser escrito.", 
        author: "Desconhecido" 
    },
    { 
        quote: "A resposta para todos os problemas de TI: ‘Já tentou desligar e ligar de novo?’.", 
        author: "Desconhecido" 
    },
    { 
        quote: "O código está pronto quando o programador se cansa, não quando está perfeito.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Os bugs não são defeitos, são recursos não documentados.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Você nunca verá um programador mais religioso do que quando ele solta um 'Meu Deus, por que isso não funciona?'.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Se meu código parece mágico, é porque eu não sei como ele funciona.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Se resolver um problema leva muito tempo, é porque era um requisito mal definido disfarçado de bug.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Desenvolvimento de software: 1% programação, 99% procurando o erro.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Erro 404: Motivação não encontrada.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Eu odeio programar, mas também odeio quando os programas não funcionam, então cá estou eu.", 
        author: "Desconhecido" 
    },
    { 
        quote: "A única constante na programação é a mudança... e os bugs.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Se um programador diz que algo levará uma hora, já separe um dia inteiro.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Por que a senha tem que ter 12 caracteres, uma letra maiúscula, um número e um sacrifício humano?", 
        author: "Desconhecido" 
    },
    { 
        quote: "Nada ensina mais sobre um sistema do que tentar quebrá-lo.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Quanto mais você mexe, mais funciona. Exceto em TI.", 
        author: "Desconhecido" 
    }
];


const quoteBtn = document.querySelector("#quoteBtn");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

function getQuote() {
    const index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;
}

quoteBtn.addEventListener("click", getQuote);