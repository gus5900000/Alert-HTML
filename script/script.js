// 1. Alert simple - Affiche un message
function montrerAlert() {
    // Utilise la fonction alert() pour afficher une boîte de dialogue simple avec un message.
    alert("Ceci est une alerte simple !");
}

// 2. Confirm - Demande une confirmation (OK/Annuler)
function montrerConfirm() {
    // La fonction confirm() affiche une boîte de dialogue avec "OK" et "Annuler".
    // Elle retourne true si l'utilisateur clique sur "OK" et false s'il clique sur "Annuler".
    const reponse = confirm("Voulez-vous continuer ?");
    
    // On vérifie la réponse de l'utilisateur.
    if (reponse) {
        // Si l'utilisateur a cliqué sur "OK", on affiche une alerte indiquant le choix.
        alert("Vous avez cliqué sur OK !");
    } else {
        // Sinon, on indique qu'il a cliqué sur "Annuler".
        alert("Vous avez cliqué sur Annuler !");
    }
}

// 3. Prompt - Demande une saisie utilisateur
function montrerPrompt() {
    // La fonction prompt() affiche une boîte de dialogue demandant une saisie.
    // Le premier argument est le message, et le second est une valeur par défaut.
    const nom = prompt("Quel est votre nom ?", "Entrez votre nom ici");
    
    // On vérifie si l'utilisateur a saisi quelque chose.
    if (nom) {
        // Si oui, on affiche une alerte avec le nom entré.
        alert("Bonjour " + nom + " !");
    } else {
        // Si non, on affiche une alerte indiquant que le champ était vide.
        alert("Vous n'avez pas entré de nom");
    }
}
