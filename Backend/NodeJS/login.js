﻿//modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
//coneção com db
var con = mysql.createConnection({
	host     : 'localhost',
	user     : 'adminb',
	password : 'adminB123!',
	database : 'brandiBDB'
});
//inicia o express
var app = express();
//define sessão
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
//define o bodyparser para trabalhar com json
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//method: post | action: auth
//autentica o utilizador através do username e password
app.post('/auth', function(request, response) {
	//guarda o username e password recebidos
	var username = request.body.username;
	var password = request.body.password;
	//foram recebidos dados
	if (username && password) {
		//procura utilizador na db
		con.query('SELECT * FROM tecnicos WHERE username = ? AND password = ?', [username, password],
		function(error, results, fields) {
			//utilizador encontrado
			if (results.length > 0) {
				//guarda a informação do utilizador logged in
				request.session.loggedin = true;
				request.session.username = username;
				//redireciona para a página home
				//response.redirect('/home');
			//utilizador não encontrado
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	//não foram recebidos dados
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
//method: post | action: logout
//termina a sessão
app.post('/logout', function(request, response) {
	//apaga as variaveis de sessão
	request.session.loggedin = false;
	request.session.username = null;
	console.log("User logged out")
	//redireciona para a página de login
	//response.redirect('/');
	response.end();
});

//*********************** API **************************//

//lista de tecnicos
app.get("/tecnicos", (req, res) => {
  let sql = "SELECT * FROM tecnicos";

  con.query(sql, (err, results) => {
    if (err) {
      console.error("Erro get tecnicos", err);
      res.status(500).json({ erro: "Erro na query" });
    } else {
      res.status(200).json(results);
    }
  });
});

//tecnico (pelo ID)
app.get("/tecnicos/:id", (req, res) => {
  let sql = "SELECT * FROM tecnicos WHERE idTecnico = ?";

  // req.params.id mapeia o :id que está no URL acima.
  con.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.error("Erro get tecnico", err);
      res.status(500).json({ erro: "Erro na query" });
    } else {
      if (results.length ==0) {
	res.status(404).json({ erro: "Bolinhas Amarelas" });
      } else {
        res.status(200).json(results);
      }
    }
  });
});

//tecnico (pelo username)
app.get("/tecnicos/:username", (req, res) => {
  let key = req.params.username;
  console.log(req.params.username);
  let sql = 'SELECT * FROM tecnicos WHERE username = ' + con.escape(key);

// req.params.username mapeia o :username que está no URL acima.
con.query(sql, (err, results) => {
	if (err) {
		console.error("Erro get tecnico", err);
		res.status(500).json({ erro: "Erro na query" });
	} else {
		console.log(req.params.username);
		if (results.length ==0) {
		console.log(key);
			res.status(200).json(key);
			//res.status(404).json({ erro: "User not found" });
		} else {
			res.status(200).json(results);
		}
	}
  });
});

app.listen(8080);