/*
1- creare una lista di mail
2-

*/

/*
const listamail = [
  'sgiulia18@hotmail.it',
  'giuliasardelli@hotmail.it',
  'giulia1234@gmail.com',
  'sardelligiulia@libero.it',
  'sardelligiulia1234@gmail.it'
]
;

console.log(listamail)

let mailTrovata = false;

const mymail = prompt('inserire mail');

for (let i = 0; i < listamail.length; i++){

  if(mymail === listamail[i]){
    mailTrovata = true;
    console.log('trovata')
  }
}

if (mailTrovata == true){
  console.log('mail presente');
  document.getElementById('mail').innerHTML=
  `La mail è nella lista`;
} else{
  console.log('mail non presente');
  document.getElementById('mail').innerHTML=
  `La mail non è nella lista`;
}

+/

// ****************************************************


/*
1-estrarre un numero random
2-estrarre un numero random per il pc
3-confrontarli
4-stampare quello maggiore
5-stampare il vincitore

*/

let mynum = (Math.floor(Math.random()*6)+1)

console.log(mynum)

document.getElementById('mydadi').innerHTML=
`Il numero estratto per l'utente è: ${mynum}`;


let pcnum = (Math.floor(Math.random()*6)+1)

console.log(pcnum)

document.getElementById('pcdadi').innerHTML=
`Il numero estratto per il pc è: ${pcnum}`;

if(mynum > pcnum){
  document.getElementById('vincitore').innerHTML=
  `Vince l'utente`;
} else if(pcnum > mynum){
  document.getElementById('vincitore').innerHTML=
  `Vince il pc`;
} else {
  document.getElementById('vincitore').innerHTML=
  `Vincono entrambi`;
}