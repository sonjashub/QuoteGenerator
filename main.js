let button = document.getElementById('button');
let output = document.getElementById('output');
let elamanOhje = ['Leuka rintaan ja kohti uusia pettymyksiä!', 'Nopeusrajoitukset ovat lähinnä ehdotuksia.',
    'Joka kuuseen kurkottaa, se katajaan kapsahtaa.', 'Pessimisti ei pety.', 
    'Tärkeintä ei ole konfliktin ratkaisu vaan syyllisen löytyminen!', 'Tyhmä ei ole se joka pyytää, vaan se joka maksaa.',
    'Teit niin tai näin, aina väärinpäin.', 'Älä murehdi tänään huomisen murheita - huomiselle riittää kyllä omansa.'];
button.addEventListener('click', function(){
    var randomGenerator = elamanOhje[Math.floor(Math.random() * elamanOhje.length)]
    output.innerHTML = randomGenerator;
})
