const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const texteDynamique = document.getElementById("texte-dynamique");

const textes = [
    "Développeur Web Junior",
    "Créateur d'interfaces modernes",
    "Passionné par le développement web"
];

let indexTexte = 0;
let indexLettre = 0;
let suppression = false;

function afficherTexte() {

    const texteActuel = textes[indexTexte];

    if (!suppression) {

        texteDynamique.textContent =
            texteActuel.substring(0, indexLettre + 1);

        indexLettre++;

        if (indexLettre === texteActuel.length) {
            suppression = true;

            setTimeout(afficherTexte, 1800);
            return;
        }

    } else {

        texteDynamique.textContent =
            texteActuel.substring(0, indexLettre - 1);

        indexLettre--;

        if (indexLettre === 0) {

            suppression = false;

            indexTexte++;

            if (indexTexte === textes.length) {
                indexTexte = 0;
            }
        }
    }

    setTimeout(afficherTexte, suppression ? 50 : 80);
}

afficherTexte();