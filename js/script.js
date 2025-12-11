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

const distanceKmElement = document.querySelector(".distanceKm");
console.log(distanceKmElement)
const ageNumElement = document.querySelector(".ageNum");
console.log(ageNumElement) 

const pricePerKm = 0.21; //costo del biglietto al km
 

const formElement = document.querySelector("form");
console.log(formElement)
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const distanceTrip = Number(distanceKmElement.value);
    const userAge = Number(ageNumElement.value);
    //controllo che l'utente inserisca dei valori validi per km
    if(isNaN(distanceTrip) || distanceTrip <= 0){
        alert("Inserisci un numero di km valido!");
        distanceKmElement.value = "";
        return;
    }
    
    //controllo che l'utente inserisca dei valori validi per età
    if (isNaN(userAge)|| userAge <= 0){
        alert("Inserisci un'età valida!");
        ageNumElement.value = "";
        return;
    }
    //calcolo il prezzo 
    let ticketPrice = distanceTrip * pricePerKm;
    //applico gli sconti 
    if (userAge < 18){
    ticketPrice*= 0.8;
} else if (userAge > 65){
    ticketPrice*=0.6;
}
console.log(ticketPrice);

console.log(`Il prezzo finale è: €${ticketPrice.toFixed(2)}`);
})
