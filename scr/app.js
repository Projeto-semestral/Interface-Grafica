const express = require('express')
const session  = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 5020;
const modelo = require('./models/modelos');



var Livro = modelo.Livro; 

let livro_1 = new Livro(1,"O pequeno principe", "comedia", "Antoine de Saint-Exupéry","06/04/1943"); 
let livro_2 = new Livro(2,"teste", "comedia", "Richard","08/01/2000");
let livro_3 = new Livro(3,"vadias", "drama", "braca","01/10/2020");    
let livro = [];
livro.push(livro_1);
livro.push(livro_2);
livro.push(livro_3);


var login = "admin"
var password = "123"
var matricula = "123"

app.use(session({secret:'hsdjnnckjsdncsnkcjnd'}))
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cors());

app.get('/',(req, res) =>{
  res.render('tabela_livro.ejs',{lista_livros : livro})
} );


  app.post('/login', (req, res) => {
    if(req.body.password == password && req.body.login == login  && req.body.matricula == matricula ){
      req.session.login = login;
      res.render('tabela_admin.ejs', {lista_livros : livro})
      app.get('/cadastro', (req, res) => {
        res.render('cadastro_livro.ejs', {lista_livros : livro}) 
      })
      console.log("logado")
    }else{
      res.render('login.ejs');
      console.log("nao logado");
    }
    
  });

  

  app.get('/login', (req, res) => {
    if (req.session.login) {
      res.render('tabela_admin.ejs',{lista_livros : livro})
      app.get('/cadastro', (req, res) => {
        res.render('cadastro_livro.ejs', {lista_livros : livro})
      })
    }else{
      res.render('login.ejs');
      
    }
    
  });


  app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  });


app.use(express.static('public'));
app.listen(port, listenHandler);



function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}


