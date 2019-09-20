dayName = new Array ("Domingo","Segunda","Terça","Quarta","Quinta","SEXXXTOU","Sabado");
mesName = new Array (1,2,3,4,5,6,7,8,9,10,11,12);
now = new Date

document.write(`${now.getDate()}/${mesName[now.getMonth()]}/${now.getFullYear()}
                <br>&#x1F4C6;${dayName[now.getDay()]}`) 
document.write(`<br><br>Noticas Atualizadas as <br>&#x231A;${now.getHours()}:${now.getMinutes()}h`)   
       