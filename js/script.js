/*
1- creare una lista di mail
2-

*/


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
