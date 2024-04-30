let cep = document.getElementById("cep");
let rua = document.getElementById("rua");
let cidade = document.getElementById("cidade");
let bairro = document.getElementById("bairro");
let estado = document.getElementById("estado");

cep.addEventListener('focusout', async() =>{
    try{
        let validacao = /^[0-9]{8}$/
        if(!validacao.test(cep.value)){
            console.log("CEP inválido!");
        }
            let resposta =  await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            let result = await resposta.json();
            rua.value = result.logradouro
            cidade.value = result.localidade
            bairro.value = result.bairro
            estado.value = result.uf 
    }catch(e){
        e.console.error("Deu ruim!!");
    }
})

