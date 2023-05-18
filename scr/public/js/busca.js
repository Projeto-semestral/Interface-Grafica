const busca = document.getElementById("busca")
busca.addEventListener("click", handlebusca)

function handlebusca() {
    console.log("passei")
    persistence_ajax()
}


function persistence_ajax(){
    $.ajax({
      url: `http://localhost:5002/api_gateway/list`,
      dataType: 'json',
      crossOrigin: true,
      success: function(data){
        exibirDados(data)
  }
    });
} 

// console.log(data)

function exibirDados(dados) {
    const tbody = document.querySelector(".dados");
  
    if (dados && dados.length > 0) {
      // Limpar o conteúdo atual da tabela
      tbody.innerHTML = "";
  
      // Iterar sobre os dados e criar linhas para cada item
      dados.forEach(function (item) {
        const tr = document.createElement("tr");
  
        // Criar células e definir o conteúdo
        const tituloCell = document.createElement("td");
        tituloCell.textContent = item.titulo;
        tr.appendChild(tituloCell);
  
        const assuntoCell = document.createElement("td");
        assuntoCell.textContent = item.assunto;
        tr.appendChild(assuntoCell);
  
        const autorCell = document.createElement("td");
        autorCell.textContent = item.autor;
        tr.appendChild(autorCell);
  
        const dataCell = document.createElement("td");
        dataCell.textContent = item.data;
        tr.appendChild(dataCell);
  
        // Adicionar a linha à tabela
        tbody.appendChild(tr);
      });
    }
  }
  
  
  
  
  
  
  