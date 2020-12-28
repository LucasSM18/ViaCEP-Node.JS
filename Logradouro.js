const express = require('Express'),
      app = express(),
      bodyParser = require('body-parser'),
      buscaCep = require('busca-cep')

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendfile(__dirname + "/index.html")
});

app.post("/logradouro", function(req, res){
      var resp = buscaCep(req.body.CEP, {sync: true});
      if(!resp.hasError)
      {
        res.send('<h4>CEP: ' + resp.cep + '</h4>' +
                 '<h4>Logradouro: ' + resp.logradouro + '<h4>' +
                 '<h4>Bairro: ' + resp.bairro + '</h4>' +
                 '<h4>UF: ' + resp.uf + '</h4>')
        console.log('Dados obitidos com sucesso!')
      }
      else
      {
        console.log("Erro: VErifique se o CEP é válido.");
      }
});

app.listen(8081, function(){
   console.log("Servidor Rodando na url http://localhost:8081")
});
