const busca = document.getElementById("busca")
// busca.addEventListener("click", procura)

    // function procura(dados) {
    //     const search_input = document.getElementById("search_input").value
    //     console.log(search_input)
    //     console.log(Object.values(dados).filter( item => item.titulo ===  "vamos"))
    //   }


window.onload = function() {
    persistence_ajax()
}

function persistence_ajax(){
    $.ajax({
      url: `http://localhost:5002/api_gateway/list`,
      dataType: 'json',
      crossOrigin: true,
      success: function(data){
        exibirDados(data)
        procura(data)
  }
    });
} 

// console.log(data)

function exibirDados(dados) {

    var va  = dados.map(function(item){
        return`
        <tr>
        <td>${item.titulo}</td>
        <td>${item.autor}</td>
        <td>${item.assunto}</td>
        <td>${item.data}</td>
        </tr>
        `
    })
    document.querySelector(".table tbody").innerHTML = va.join("");
  }
  
// busca os dados pelos input seach
// const search = document.getElementById("search_input")
// const tabela  =  document.querySelector("dados")
  



  
  