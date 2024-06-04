const btnBlague = document.getElementById("btnBlague");
const question = document.getElementById("question");
const reponse = document.getElementById("reponse");
const lienApi = "https://application-repartie-back-end.onrender.com/api/v1/blagues";
let data = [];

const getData = async () => {
  const req = await fetch(lienApi);
  const blague = await req.json();
  data = blague.result;
};

getData();

btnBlague.addEventListener("click", () => {
  const blagueAleatoire = getBlagueAleatoire();
  if (blagueAleatoire) {
    question.textContent = blagueAleatoire.question;
    reponse.textContent = blagueAleatoire.reponse;
  }
});

function getBlagueAleatoire() {
  if (data.length > 0) {
    const indexAleatoire = Math.floor(Math.random() * data.length);
    return data[indexAleatoire];
  } else {
    console.error("Erreur - Aucune donnée de blague chargée.");
    return null;
  }
}
