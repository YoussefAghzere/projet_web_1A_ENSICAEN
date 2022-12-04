onloadHook.push(function () {
    const tab = ["Demande de devis", "Offre d'emploi", "Demande de renseignement", "Autre"];
    const select = document.getElementById("subject");
    select.innerText = ''
    for (i = 0; i < tab.length; i++) {
        createElement("option", null, tab[i], select)
    }
})
