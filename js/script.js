$(document).ready(function () {

    //******************* DISCLAIMER ***********************
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

    // ARRAY TYPE COLORS 
    const colors = [
        'orange',
        'purple',
        'maroon'
    ];
    
    // REFERENZE HTML
    // Sintassi JQ per targhettizzare il container icons in cui inietteremo le icone
    const container = $('.icons');


    // 1 PRINT ICONE SU SCHERMO IN BIANCO E NERO
    // I due attributi della funzione che invoco per printare le icone su schermo corrispondono all'array da cui prendere le icone e alla var const in cui iniettarle
            // printIcons(icons, container);


    // 2 PRINT ICONE SU SCHERMO COLORATE IN BASE AL TYPE
    // I due attributi della funzione che invoco per printare le icone colorate in base al type corrispondono all'array principale delle icone e all'array con i tre colori da abbinare ai tre type diversi delle icons nella lista
    const coloredIcons = iconColors(icons, colors);
    printIcons(coloredIcons, container);



}); // End document ready


// *********************************************
// FUNCTIONS
// *********************************************

// FUNZIONE PER PRINTARE LE ICONE SU SCHERMO CON RELATIVO COLORE PER OGNI TYPE
function printIcons(icons, container) {
    // Devo iterare su tutte le icone presenti nell'array, il metodo migliore consiste nell'utilizzare .FOREACH sull'array icons. Icon è la name convention più comprensibile e sostituisce l'element della sintassi base.
    icons.forEach(( icon ) => {
        // Destructuring dell'oggetto nell'array al fine di estrapolare da esso solo i valori che mi servono con una sintassi breve e comprensibile
        const {family, prefix, name, color} = icon;
        // Creo una var const con ciò che vado ad iniettare effettivamente nell'HTML utilizzando il literal template (interpolazione di stringhe) per inserire dinamicamente i dati sostituendo i valori fissi di ogni icona con i dati che di volta in volta itero grazie al .FOREACH e che ho destrutturato in precedenza 
        const html = 
            `<div class="icon">
                <i class="${family} ${prefix}${name}
                "style="color: ${color}" ></i>
                <div class="icon-name">
                    ${name}
                </div>
            </div>`;
            // Con .append 'attacco' al mio container i dati che ho estrapolato ed inietto il tutto nel mio HTML
            container.append(html);
    });
};

// FUNZIONE PER ICONE COLORATE IN BASE AL TYPE 
function iconColors(icons, colors) {
    // Prima di tutto dobbiamo estrapolare i type per capire quanti e quali sono, per farlo creo un'altra piccola funzione interna alla funzione iconColors (è la funzione che segue questa in cascata)
    const iconType = getType(icons)
    // Assegnare il colore in base al type, dato che devo returnare un array è il caso di utilizzare .MAP il trucco è che il numero di types e di colors è lo stesso (entrambi 3) e quindi anche gli INDEX nell'array si accoppiano perfettamente
    const coloredIcons = icons.map((icon) => {
        const indexTypes = iconType.indexOf(icon.type);
        // a .MAP associo l'utilizzo di spread per avere una copia esatta dei valori già presenti nell'array di base a cui aggiungere i nuovi valori che voglio inserire (in questo caso solo color). Come detto per associare type e color utilizzo l'escamotage dell'index dei due array che sono della stessa lunghezza
        return {
            ...icon,
            color: colors[indexTypes]
        }
    });
    // Lo returno in modo da portare il risultato fuori dalla mia funzione
    return coloredIcons;
}
// MINI-FUNZIONE PER ESTRARRE IL TYPE DEGLI ELEMENTI DALL'ARRAY ICONS
// Il concetto è che devo estrapolare i type senza ripeterli nel senso che se ho 10 oggetti con type = animal non devo avere 10 type animal, ma uno solo e cosi via. I type estrapolati vanno salvati in un nuovo array
function getType(icons) {
    // Preparo l'array vuoto da riempire
    const types = [];
    // Itero con .FOREACH su tutti i miei oggetti al fine di estrapolare i type
    icons.forEach((icon) => {
        // Per ogni iterazione eseguita dal .FOREACH se il mio array appena creato non contiene il type dell'icon su cui sta iterando allora la pusha nel suddetto array, altrimenti passa a quello successivo e cosi via
        if (! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });
    // Lo returno in modo da portare il risultato fuori dalla mia funzione
    return types;
}
