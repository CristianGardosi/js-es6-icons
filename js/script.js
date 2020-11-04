$(document).ready(function () {

    // L'esercitazione è volutamente eseguita utilizzando più funzioni e proprietà ECMASCRIPT 6 possibili, a volte anche a discapito della sinteticità del codice, per vedere tutti gli argomenti visti a lezione. 

    // ARRAY ICONS 
    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
    ];
    
    // REFERENZE HTML
    // Sintassi JQ per targhettizzare il container icons in cui inietteremo le icone
    const container = $('.icons');

    // PRINT ICONE SU SCHERMO
    // I due attributi della funzione che invoco per printare le icone su schermo corrispondono all'array da cui prendere le icone e alla var const in cui iniettarle
    printIcons(icons, container);



}); // End document ready


// *********************************************
// FUNCTIONS
// *********************************************

// FUNZIONE PER PRINTARE LE ICONE SU SCHERMO
function printIcons(icons, container) {
    // Devo iterare su tutte le icone presenti nell'array, il metodo migliore consiste nell'utilizzare .FOREACH sull'array icons. Icon è la name convention più comprensibile e sostituisce l'element della sintassi base.
    icons.forEach(( icon ) => {
        // Destructuring dell'oggetto nell'array al fine di estrapolare da esso solo i valori che mi servono con una sintassi breve e comprensibile
        const {family, prefix, name} = icon;
        // Creo una var const con ciò che vado ad iniettare effettivamente nell'HTML utilizzando il literal template (interpolazione di stringhe) per inserire dinamicamente i dati sostituendo i valori fissi di ogni icona con i dati che di volta in volta itero grazie al .FOREACH e che ho destrutturato in precedenza 
        const html = 
            `<div class="icon">
                <i class="${family} ${prefix}${name}"></i>
                <div class="icon-name">
                    ${name}
                </div>
            </div>`;
            // Con .append 'attacco' al mio container i dati che ho estrapolato ed inietto il tutto nel mio HTML
            container.append(html);
    });
};