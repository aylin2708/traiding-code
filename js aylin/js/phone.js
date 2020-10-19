var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo (phoneInput) {
    var OK = re.exec ('phoneInput.value');
    if (!OK){
    console.error (phoneInput.value + '¡No es un número de teléfono con código de área!');
     } else {
    console.log('Gracias, tu número de teléfono es' + OK [0]);}
}