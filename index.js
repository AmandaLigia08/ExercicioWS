const soap = require('soap')

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, (err, client) => {
    if(err){
        console.log(err)
    } else {
        console.log('Tudo OK! Irá aparecer as informações abaixo ...')
        client.consultaCEP({
           cep: '58704350' 
        }, (err, res) => {
            console.log(res)
        })
    }    
})
