const express = require('express');
const app = express();
const bodyParser = require(`body-parser`);


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static('www'));

let usuarios = [];

app.post('/login', function (req, res) {
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].usuario === req.body.usuario && 
            usuarios[i].senha === req.body.senha)
            res.redirect("/index3.html");
    }
    res.end();
});

app.post('/cadastrar', function (req, res) {
    let novo = {};
    novo.nome = req.body.nome;
    novo.sobrenome = req.body.sobrenome;
    novo.usuario = req.body.usuario;
    novo.email = req.body.email;
    novo.senha = req.body.senha;
    usuarios.push(novo);
    res.send(usuarios);
});

app.listen(3000);