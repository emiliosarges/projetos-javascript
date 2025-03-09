const quotes = [
    { 
        quote: "O único modo de fazer um excelente trabalho é amar o que você faz.", 
        author: "Steve Jobs" 
    },
    { 
        quote: "Seja a mudança que você quer ver no mundo.", 
        author: "Mahatma Gandhi" 
    },
    { 
        quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", 
        author: "John Lennon" 
    },
    { 
        quote: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", 
        author: "Winston Churchill" 
    },
    { 
        quote: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", 
        author: "Nelson Mandela" 
    },
    { 
        quote: "A felicidade não é algo pronto. Ela vem de suas próprias ações.", 
        author: "Dalai Lama" 
    },
    { 
        quote: "Não encontre falhas, encontre soluções.", 
        author: "Henry Ford" 
    },
    { 
        quote: "Nós somos o que repetidamente fazemos. A excelência, portanto, não é um ato, mas um hábito.", 
        author: "Aristóteles" 
    },
    { 
        quote: "A vida é 10% o que acontece comigo e 90% como eu reajo a isso.", 
        author: "Charles Swindoll" 
    },
    { 
        quote: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.", 
        author: "Albert Einstein" 
    },
    { 
        quote: "Se você quer viver uma vida feliz, amarre-a a um objetivo, não a pessoas ou coisas.", 
        author: "Albert Einstein" 
    },
    { 
        quote: "Quem olha para fora sonha, quem olha para dentro desperta.", 
        author: "Carl Jung" 
    },
    { 
        quote: "Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer.", 
        author: "Albert Einstein" 
    },
    { 
        quote: "Coragem é a resistência ao medo, domínio do medo – não a ausência do medo.", 
        author: "Mark Twain" 
    },
    { 
        quote: "A única coisa que devemos temer é o próprio medo.", 
        author: "Franklin D. Roosevelt" 
    },
    { 
        quote: "O tempo que você gosta de perder não é tempo perdido.", 
        author: "John Lennon" 
    },
    { 
        quote: "A simplicidade é o último grau da sofisticação.", 
        author: "Leonardo da Vinci" 
    },
    { 
        quote: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.", 
        author: "Roberto Shinyashiki" 
    },
    { 
        quote: "O que não te mata, te fortalece.", 
        author: "Friedrich Nietzsche" 
    },
    { 
        quote: "Grandes coisas nunca vêm de zonas de conforto.", 
        author: "Desconhecido" 
    },
    { 
        quote: "O sucesso é uma jornada, não um destino.", 
        author: "Ben Sweetland" 
    },
    { 
        quote: "Se você quer algo que nunca teve, deve estar disposto a fazer algo que nunca fez.", 
        author: "Thomas Jefferson" 
    },
    { 
        quote: "Acredite em si mesmo e vá em frente.", 
        author: "Desconhecido" 
    },
    { 
        quote: "Não deixe que o medo de errar impeça que você jogue.", 
        author: "Babe Ruth" 
    },
    { 
        quote: "A única maneira de fazer um grande trabalho é amar o que você faz.", 
        author: "Steve Jobs" 
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