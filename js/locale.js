$(document).ready(function(){
    var userLang = navigator.language;

    //Die Liste unten ist nur eine Auswahl der am häufigsten auftretenen RTL Sprachen
    var rtlLangs = ["ar", "arc", "dv", "fa", "ha", "he", "khw", "ks", "ku", "ps", "ur", "yi"];
    rtlLangs.forEach(element => {
        if(element == userLang.split('-')[0]){ //Der Split ist hier nötig um die Varianten der Sprachen auszufiltern z.B. Die Sprache "Deutsch" ist de-DE uns würde aber logischer weise nur der erste Teil interssieren
            document.dir = 'rtl';
        }
    });
});