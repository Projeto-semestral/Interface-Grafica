// window.onload = function(){
//     bot = document.getElementById('bot');
//     bot_g = document.getElementById('bot_g');
//     input = document.getElementById('in');
//     output = document.getElementById('out');
//     output_2 = document.getElementById('name_bd');
//     output_3 = document.getElementById('id_bd');
//     bot.onclick = function(){
//         //read input:
//         str_in = input.value;
//         $.ajax({
//             url: 'http://localhost:5002/api_gateway/lower_case?str_input='+str_in,
//             dataType: 'json',
//             crossOrigin: true,
//             success: function(data){
//                 res_1 = data.lowercase_str;
//                 cripto_ajax(data.lowercase_str);
//            }
//         }); //Ajax
//     } //button cripto click

//     bot_g.onclick = function(){
        // str_cripto = output.value;
        // persistence_ajax(str_cripto);
//     }// button gravar click

//     function cripto_ajax(str_data){
//         $.ajax({
//           url: 'http://localhost:5002/api_gateway/cripto?str_input='+str_data,
//           dataType: 'json',
//           crossOrigin: true,
//           success: function(data){
//                 res_1 = data.cripto_str;
//                 output.value = res_1;
//           }
//         });
//     } //cripto ajax

   


// }
// //onload
const usuario = document.getElementById("out")
const assunto = document.getElementById("assunto")
const autor = document.getElementById("autor")
const data_public = document.getElementById("data_public")
const gravar = document.getElementById("bot_g")
gravar.addEventListener("click",adiciona)

// console.log(valor)
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
    });
} //persistence ajax