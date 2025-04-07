// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

const card =  document.getElementById("cards")

// creata richiesta AJAX
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) =>{
    // salvo in una variabile i dati che ricevo dalla richiesta API
    let cardContent= resp.data

    // inizializzo la funzione per la creazione delle card 
    const createMyCards = (cardContent) => {
    let myCard = `<div class="col-3 mx-3 my-3 myCard bg-white">
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
    })}
    
})
