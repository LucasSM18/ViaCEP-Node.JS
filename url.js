var url = 'viacep.com.br/ws/?/xml/'

var link = function(cep){
  url = url.replace('?', cep)
    if(url.indexOf('-') > -1){
      url = url.replace('-', '')
    }
  return url
}

module.exports = link
