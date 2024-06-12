const URL = `https://swapi.dev/api/people/1/`;

fetch(URL)
.then(resposta => {
    resposta.json().then(dados => {
        console.log("Minha resposta é válida",dados);
    });
    console.log("Verificando se minha resposta é válida", resposta);
})
.catch(err => console.error(err));

const urlAll = `https://swapi.dev/api/people`;

fetch(urlAll)
.then(resposta => resposta.json().then(dados =>{
    console.log("Vamos ver", dados.results);
    const personagens = dados.results; 

    return personagens.map(personagem => {
    
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerHTML = `${personagem.name}`
    ul.appendChild(li);
    li.appendChild(h4);
})
    

}))
.catch(err => console.error(err))