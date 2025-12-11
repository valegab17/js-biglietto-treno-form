/* porto la logica dello sconto dell'esercizio precedente 
//istruzioni:
//il prezzo del biglietto è definito in base ai km che vuole percorrere il passeggero (0.21€ al km)
//SE  x < 18 sconto -20%
//SE x > 65 sconto -40%


//chiedo quanti km vuole percorrere 
//chiedo età utente
//quanto costa il biglietto del treno 
//prezzo del biglietto = 0,21€ / km
//Inizio esercizio
//SCONTI
//Se l'utente è minorenne
//se l'utente è over 65
*/



//console.log("funziona");

const formElement = document.querySelector("form");
const nameElement = document.getElementById('yourIdentity');
const distanceKmElement = document.querySelector(".distanceKm");
const ageNumElement = document.querySelector(".ageNum");
const undoBtn = document.getElementById('undo');
const ticketContainer = document.getElementById("ticket-details");

// elementi della tabella
const outputNome = document.getElementById("output-nome");
const outputOfferta = document.getElementById("output-offerta");
const outputPrezzo = document.getElementById("output-prezzo");
const outputCarrozza = document.getElementById("output-carrozza");

// inizialmente nascondo la tabella
const previewTable = document.querySelector(".your-ticket");
previewTable.classList.add("d-none");

const pricePerKm = 0.21; //costo del biglietto al km


console.log(formElement)
formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = nameElement.value.trim();
    const distanceTrip = Number(distanceKmElement.value);
    const userAge = ageNumElement.value;

    //controllo che l'utente inserisca dei valori validi per km
    if (isNaN(distanceTrip) || distanceTrip <= 0) {
        alert("Inserisci un numero di km valido!");
        distanceKmElement.value = "";
        return;
    }

    //controllo che l'utente inserisca dei valori validi per età 
    /*  if (isNaN(userAge)|| userAge <= 0){
         alert("Inserisci un'età valida!"); //poi l'ho rimosso perché ho limitato le scelte nel form 
         ageNumElement.value = "";
         return;
     } */
    //calcolo il prezzo 
    let ticketPrice = distanceTrip * pricePerKm;
    let ticketType = "Biglietto Standard";
    //applico gli sconti 
    /*     if (userAge < 18){
        ticketPrice*= 0.8;
    } else if (userAge > 65){ 
        ticketPrice*=0.6;
    } */
    if (userAge === "minorenne") {
        ticketPrice *= 0.8;
        ticketType = "Sconto under 18"
    } else if (userAge === "over65") {
        ticketPrice *= 0.6;
        ticketType = "Sconto over 65"
    } else {
        console.log("Spiacente ma non rientri nei requisiti minimi")
    }
    const carrozza = Math.floor(Math.random() * 12) + 1;

    // mostro la tabella e aggiorno i valori
    previewTable.classList.remove("d-none");
    outputNome.innerText = nome;
    outputOfferta.innerText = ticketType;
    outputPrezzo.innerText = `${ticketPrice.toFixed(2)} €`;
    outputCarrozza.innerText = carrozza;

})


// numero carrozza casuale 1-12

//resetta tutto con bottone annulla
undoBtn.addEventListener("click", () => {
    formElement.reset();
    previewTable.classList.add("d-none");
})