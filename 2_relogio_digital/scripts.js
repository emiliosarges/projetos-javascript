function updateClock() {
    // Obter referências aos elementos HTML
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".seconds");

    // padStart(2, "0"): Garante que a hora tenha sempre 2 caracteres.
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

// teste no console

    console.log(now, hours);
} 

// Executa a função a cada 1 segundo. Recebe como parametro uma função e o tempo em milissegundos. 

setInterval(updateClock,1000); 
