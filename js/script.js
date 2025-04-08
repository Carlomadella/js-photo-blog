// mi creo le variabili che richiamano elementi del dom
const card =  document.getElementById("cards")
const overlay = document.getElementById("overlay")
const myButton = document.getElementById("button")

// creata richiesta AJAX
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) =>{
    // salvo in una variabile i dati che ricevo dalla richiesta API
    let cardContent= resp.data

    // inizializzo la funzione per la creazione delle card 
    const createMyCards = (cardContent) => {
    let myCard = `<div class="col-lg-3 col-md-5 col-sm-12 mx-3 my-3 myCard bg-white">
                <div class="image">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <img src="${cardContent.url}" class="pt-2" alt="">
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


