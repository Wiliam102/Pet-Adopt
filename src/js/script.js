// abaixo um array de objetos
const pets = {

    scooby: {
    nome:"scooby",
    descricao:"Scooby é um cão leal e protetor. Ama crianças e é muito obediente. Precisa de espaço para correr e brincar. Ideal para famílias ativas.",
    img:"./src/assets/scooby 1.png"
},

 garfield:{
    nome:"garfield",
    descricao:"Garfield é um gato independente mas carinhoso. Gosta de explorar e é muito curioso. Ideal para quem quer um companheiro aventureiro.",
    img:"./src/assets/garfield.png"
},

  thor:{
    nome:"thor",
    descricao:"Thor é um cão cheio de energia e lealdade. Adora brincar e estar perto da família, sempre demonstrando carinho e proteção. Procura um lar onde possa receber amor e ter bastante espaço para gastar sua energia.",
    img:"./src/assets/thor.png"
},

  pantera:{
    nome:"pantera",
    descricao:"Pantera é uma gatinha carinhosa e brincalhona. Ela adora carinho e é muito sociável com outros gatos. Procura uma família que lhe dê muito amor e atenção",
    img:"./src/assets/pantera.png"
}

}


const nome = document.getElementById("nomeDoPet");
const descricao = document.getElementById("descricaoDoPet");
const foto = document.getElementById("fotoDoPet");

function trocarDescricaoPet(){

 // linha abaixo constante recebe o alt da imagem clicada
 const nomePet = document.querySelector("img").alt;

 
 const pet = pets[nomePet];// recebe objeto com nome do pet
 nome.textContent = pet.nome; // troca o nome
 descricao.textContent = pet.descricao; // troca a descricao
 foto.src = pet.img; // troca a imagem

}
