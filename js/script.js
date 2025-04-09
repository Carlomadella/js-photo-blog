// mi creo le variabili che richiamano elementi del dom
const card =  document.getElementById("cards") // The HTML DOM document object is the owner of all other objects in your web page.
const overlay = document.getElementById("overlay")
const myButton = document.getElementById("button")
const renderedImage = document.getElementById("cardImage")

// creata richiesta AJAX
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) =>{ // Promise.then() takes two arguments, a callback for success and another for failure. Both are optional, so you can add a callback for success or failure only.
    
    // salvo in una variabile i dati che ricevo dalla API
    let cardContent = resp.data

    // inizializzo la funzione per la creazione delle card 
    const createMyCards = (cardContent) => { // uso come parametro cardContent che contiene i dati ricevuti dalla richiesta
    let myCard = `<div class="col-lg-3 col-md-5 col-sm-12 mx-3 my-3 myCard bg-white">
                <div class="image">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <img id="cardImage" src="${cardContent.url}" class="pt-2" alt="">
                </div>
                <div class="text pt-3">
                    <p class="text-secondary mb-0">${cardContent.date}</p>
                    <h5 class="">${cardContent.title}</h5>
                </div>
            </div>`
            return myCard
    }

    // creo la funzione per renderizzare le card create in precedenza
    const renderMyCards = (cardContent) => {
    // creo la variabile che contiene le varie cards create
    let visibleCard = "";
    //ciclo l'array di oggetti e concateno la stringa appena creata con la funzione richiamata perchè all'interno della stessa chiamata 
    cardContent.forEach((item) => {
        visibleCard += createMyCards(item)
    })
    //stampo a video all'interno del div richiamato tramite id la variabile contenente il blocco di codice delle card
    card.innerHTML = visibleCard
    }

    // richiamo la funzione
    renderMyCards(cardContent)
});

// OVERLAY
// al click dell'immagine si apre l'overlay e mostra l'immagine selezionata
card.addEventListener("click", (event) => {
    if (event.target.id === "cardImage") {    //target è una proprietà degli eventi che prende l'elemento in cui è avvenuto l'evento in questo caso l'immagine creata nella funzione createMyCards
        overlay.classList.remove("d-none");
        myButton.classList.remove("d-none");

        // creo il blocco di codice dove inserire e renderizzare l'immagine selezionata all'interno dell'overlay
        overlay.innerHTML = `<div class="overlayImage">
                <img src="${event.target.src}" alt="" class="img-fluid">
            </div>`;
    }
});

// al click del bottone si chiude l'overlay
myButton.addEventListener("click", () => {
    overlay.classList.add("d-none");
    myButton.classList.add("d-none");
});

