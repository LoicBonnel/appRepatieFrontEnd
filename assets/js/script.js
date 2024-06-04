const btnBlague = document.getElementById("btnBlague");
const question = document.getElementById("question");
const reponse = document.getElementById("reponse");
const lienApi = "https://application-repartie-back-end.onrender.com/api/v1/blagues"
let data = [];

const getData = async () => {
  const req = await fetch(lienApi);
  console.log(req);
  const blague = await req.json();
  console.log("result", blague);
  data = blague.result;
};

getData();

btnrandom.addEventListener("click", () => {
  console.log("Click");
  const blagueAleatoire = BlagueAleatoire();
  question.textContent = blagueAleatoire.question;
  reponse.textContent = blagueAleatoire.reponse;
});

function blagueAleatoire() {
    if(data.length > 0){
        if (data && data.length > 0) {
            const indexAleatoire = Math.floor(Math.random() * data.length);
            const blagueAleatoire = data[indexAleatoire];
           
            return blagueAleatoire;

        } else {
            console.error("Erreur - Aucune donnée de blague chargée.");
            return null;
        }
    }
    else{
        console.error("La liste est vide.");
        return null;
    }

}

// Fonction pour récupérer une blague
// function fetchBlague() {
//     // Requête fetch vers votre API pour obtenir une blague
//     fetch('URL_DE_VOTRE_API')
//     .then(response => response.json())
//     .then(data => {
//         // Récupération de la question et de la réponse
//         const question = data.question;
//         const reponse = data.reponse;

//         // Affichage de la question et de la réponse dans le container
//         document.getElementById('blagueContainer').innerHTML = `
//             <p class="question">${question}</p>
//             <p class="reponse">${reponse}</p>
//         `;
//     })
//     .catch(error => console.error('Erreur lors de la récupération de la blague :', error));
// }
