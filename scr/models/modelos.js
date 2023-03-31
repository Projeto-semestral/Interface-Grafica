class Livro{
    constructor(numero_registro, titulo, assunto, autor,data_public){
        this.numero_registro = numero_registro;
        this.titulo = titulo;
        this.assunto = assunto;
        this.autor = autor;
        this.data_public = data_public;

    }
}





module.exports = {
    Livro: Livro,
}  
