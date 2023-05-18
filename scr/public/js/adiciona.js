const usuario = document.getElementById("out")
const assunto = document.getElementById("assunto")
const autor = document.getElementById("autor")
const data_public = document.getElementById("data_public")
const gravar = document.getElementById("bot_g")
gravar.addEventListener("click",adiciona)

function adiciona() {
    const valor = usuario.value
    const valor1 = assunto.value
    const valor2 = autor.value
    const valor3 = data_public.value
    console.log(valor + valor1 + valor2 + valor3)
    persistence_ajax(valor,valor1,valor2,valor3);

}




function persistence_ajax(str_data,sla,autor,a){
    $.ajax({
      url: `http://localhost:5002/api_gateway/persistence?str_input=${encodeURIComponent(str_data)}&assunto=${encodeURIComponent(sla)}&autor=${encodeURIComponent(autor)}&a=${encodeURIComponent(a)}`,
      dataType: 'json',
      crossOrigin: true,
      success: function(data){
        console.log(data.autor)
  }

    });
} 