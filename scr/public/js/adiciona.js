const cadastra = document.getElementById("a")
cadastra.addEventListener("click" , manda)
const titulo = document.getElementById("titulo")

function fazPost(url , body) {
    console.log(body)
    let request  = new XMLHttpRequest
    request.open("POST" , url , true)
    request.setRequestHeader("Content-type" , "application/json")
    request.send(JSON.stringify.body)


    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText

}


function manda() {
    event.preventDefault()
    url=`ttp://localhost:5002/api_gateway/persistence?str_input=`
    const titulo = document.getElementById("titulo").value
    const assunto = document.getElementById("assunto").value
    const autor = document.getElementById("autor").value
    const data_public = document.getElementById("data_public").value

    console.log(titulo)
    console.log(assunto)
    console.log(autor)
    console.log(data_public)

body = {
    "titulo" : titulo,
    "assunto" : assunto,
    "autor" : autor,
    "data_public" : data_public
}

    fazPost(url , body)
}
