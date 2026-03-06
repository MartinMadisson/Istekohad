const salvesta = document.querySelector("#salvesta")
const nimi = document.querySelector("#nimi")
const kohad = document.querySelector("#koht")
let eesnimi = ""
let istekoht = ""

salvesta.addEventListener('click', function() {
    eesnimi = nimi.value
    istekoht = kohad.value
    save(eesnimi, istekoht)

});


async function save (name, place) {
const response = await fetch('https://tinkr.tech/sdb/istekohad', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: name, places: place })
});
}

async function load() {
const response = await fetch('https://tinkr.tech/sdb/istekohad');
const documents = await response.json();
console.log(documents);

for (const itms of documents){
    const konteiner = document.querySelector("#container")
    const iste = document.createElement("h3")
    iste.textContent = "Nimi: " + itms.name + " Koht: " + itms.places
    konteiner.appendChild(iste)
}
}

load()