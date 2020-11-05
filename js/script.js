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


    // 3 FILTRARE LE ICONE PER TIPO IN MODO CHE SELEZIONANDO LE VARIE OPTION DELLA SELECT RESTINO SU SCHERMO SOLO LE ICONE CORRISPONDENTI
    // Targhettizzo nel mio HTML la select
    const select = $('#type')
    // Riutilizzo la funzione che ho creato per trovare i miei types e come parametro posso passare il mio array originale che contiene per l'appunto la key + valore type per ogni elemento (potevo farla anche su coloredIcons che è semplicemente una copia dell'array icons con in aggiunta il type color)
    const types = getType(icons);
    // Ora devo generare le options della select (ovvero i type + all) per farlo invoco una funzione a cui passo i parametri relativi alla lista di types da inserire e al punto in cui voglio inserirli nell'HTML ovvero nella select
    genOption(types, select);
    // A questo punto devo generare l'evento vero e proprio: cliccando il type devo visualizzare su schermo solo le icone appartenenti a quel type specifico. Per farlo utilizzo il metodo change associato a una piccola arrow function
    // . change() (metodo jQuery) si attiva quando cambia il valore dell'Elemento cui acceda, purché di tipo <input> (alla perdita del focus), <select> (alla selezione di un'opzione) o <textarea> (alla perdita del focus).
    select.change(() => {
      // Ciò che mi ritorna la costante relativa al tipo selezionato è il valore della select su cui clicca l'utente
      const selectedType = select.val();
      // Ora che ho ottenuto accesso alla select e ho intercettato la selezione fatta dall'utente tra le varie options devo filtrare per ognuna di esse la lista di icone corrispondenti. Invoco la funzione che mi vado appositamente a creare e do come attributi le mie coloredIcons e selectedType per capire quale delle options è stata scelta
      const filteredIcons = filterIcons(coloredIcons, selectedType);
      printIcons(filteredIcons, container);
      // Se io mi fermassi qua lui in effetti printa solo le icone selezionate dall'utente tramite la scelta delle options, ma continuerebbe ad aggiungerle al print originale sommando di volta in volta le icone su schermo
    });

}); // End document ready





// *********************************************
// FUNCTIONS
// *********************************************

// FUNZIONE PER PRINTARE LE ICONE SU SCHERMO CON RELATIVO COLORE PER OGNI TYPE (senza return perchè appendo direttamente il risultato du HTML)
function printIcons(icons, container) {
    // Pulisco il mio html prima di effettuare il print (serve per non far sommare tra loro le icone inizialmente printate di default al caricamento della pagine e quelle selezionate tramite le options di volta in volta dall'utente)
    container.html('')
    // Devo iterare su tutte le icone presenti nell'array, il metodo migliore consiste nell'utilizzare .FOREACH sull'array icons. Icon è la name convention più comprensibile e sostituisce l'element della sintassi base.
    icons.forEach( (icon) => {
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
    const coloredIcons = icons.map( (icon) => {
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
    icons.forEach( (icon) => {
        // Per ogni iterazione eseguita dal .FOREACH se il mio array appena creato non contiene il type dell'icon su cui sta iterando allora la pusha nel suddetto array, altrimenti passa a quello successivo e cosi via
        if (! types.includes(icon.type)) {
            types.push(icon.type);
        }
    });
    // Lo returno in modo da portare il risultato fuori dalla mia funzione
    return types;
}

// FUNZIONE PER GENERARE LE OPTION DELLA SELECT IN BASE AI TYPES
function genOption(types, select) {
    // Itero su tutti gli elementi del mio array, passo option come parametro per aiutarmi lessicalmente a capire che il risultato andrà a creare proprio le options della mia select HTML
    types.forEach( (option) => {
      // Appendo alla mia select le options, mi basta fare un'interpolazione di stringhe passando come value e come elemento interno l'attributo OPTION (che sta per ELEMENT nell'iterazione precedente). Il tutto funziona grazie alla function che ho costruito in precedenza per estrapolare dall'array i valori types e che sfrutto anche per questa task
      select.append(
        `<option value="${option}">
          ${option}
        </option>`
      )
    })
}


// FUNZIONE PER FILTRARE ATTRAVERSO LA SCELTA DI OPTION DELL'UTENTE SOLO LE ICONE CORRISPONDENTI
function filterIcons(coloredIcons, selectedType) {
    // Se l'utente seleziona all non devo effettuare alcun filtraggio, devo visualizzare tutte le icone
    if (selectedType === 'all') {
       return coloredIcons;
    }
    // Itero sul mio array di riferimento che è coloredIcons, il loop migliore da utilizzare in questo caso è .FILTER che 'screma' tra le icons e crea dei nuovi array collegando icon e relativo type 
    const filtered = coloredIcons.filter( (icon) => {
        // Faccio combaciare il type delle icone alla scelta che ha fatto l'utente tra le options
        return icon.type === selectedType;
    });

    return filtered;
}
