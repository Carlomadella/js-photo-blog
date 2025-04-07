// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

const card =  document.getElementById("cards")

// creata richiesta AJAX
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) =>{
    // salvo in una variabile i dati che ricevo dalla richiesta API
    let cardContent= resp.data
})

