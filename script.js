 function foco(){
    let nome = document.getElementById("nome");
    nome.addEventListener("focusout", foraDoFoco);
 }

 function foraDoFoco (){
    let nome  = document.getElementById('nome');
    nome.value = nome.value.toUpperCase();
    if(nome.value == "SAMILE KELLY DA SILVA NUNES"){
        let descricao = document.getElementById("descricaoP");
        descricao.innerHTML = "Huum... Talvez seja meu amorzinho..."
    }
 }

 function mouseNome(){
    let descricao = document.getElementById("descricaoP");
    descricao.innerHTML = "As letras ficarão maiúsculas";
 }

 function mouseNomeFora(){
    let descricao = document.getElementById("descricaoP");
    descricao.innerHTML = '';
 }

 function descricaoIdade() {
    var x = document.getElementById("idadeInput");
    descricao = document.getElementById('descricaoIdade');
    if (x.value == 18){
       descricao.innerHTML = "Tereteteu.(idade nova Ó)";
    } else if (x.value == '') {
        descricao.innerHTML = "";
    } else {
        descricao.innerHTML = "Será que está certa mesmo?...";
    }
 }

 function enviar() {
    event.preventDefault();
    let nome = document.getElementById('nome');
    let idade = document.getElementById('idadeInput');
    let letra = document.getElementById('letra');

    if (nome.value == '' || idade.value == '' || letra == '' ) {
        alert ("Alguma informação não foi preenchida.");
    }

    else if(nome.value != "SAMILE KELLY DA SILVA NUNES") {
        alert("Huum... Quer dizer que temos um invasor? Certifique-se que o nome está correto.");
    }

    else if (idade.value != 18){
        alert("Verifique se esta realmente é sua idade.");
    }

    else if (letra.value != "W" && letra.value != "w") {
        alert("Você errou a letra do seu amado e agora deve um par de ingressos haha, corrija-a.");
    } else {
        var x = confirm("Pode até ter acertado, mas continua devendo um par de ingressos para um assistirmos um filme agarradinhos como nunca mais fizemos, Ok?");
        if(x == false) {
            alert ("Tá devendo sim, você não tem outra opção \nHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH");
        } else {
            nome.value ='';
            idade.value ='';
            letra.value = '';
            let targetURL = "/p2/pagina2.html";
            let newURL = document.createElement('a');
            newURL.href = targetURL;
            document.body.appendChild(newURL);
            newURL.click();
            }    
    }
 }

 
