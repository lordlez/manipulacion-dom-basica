const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
//const pid = document.querySelector('#pid');
//const input = document.querySelector('input');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');




form.addEventListener('submit', sumarInputValues);


function sumarInputValues(event){
    //event.preventDefault hace que no se me recargue la web
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = 'Resultado: ' + sumaInputs;
}























/*
console.log(input.value);


console.log({
    h1,
    p,
    parrafito, 
    pid,
    input
});
*/
/*
innerHTML me permite cambiar el contenido de la etiqueta
traduciendo todo el html que le incluya

innerText es igual a innerHTML solo que no traduce otras
etiquetas html que le incluya

getAttribute me permite obtener el contenido del atributo
de la etiqueta que quiero

setAttribute me permite reemplazar el contenido del atributo
de la etiquera que quiero

classList.add me permite agregar una clase a una etiqueta
html

classList.remove me permite eliminar la clase que quiero
de la etiquera html que quiera


*/
/*
h1.innerHTML = 'Esta lloviendo';
h1.innerText = 'Esta <br> lloviendo';
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('pantalla', 'platziapple');
console.log(h1.getAttribute('pantalla'));
h1.classList.add('rojo');
h1.classList.remove('rojo');

input.value = '456';

//creo una img con document.createElement
const img = document.createElement('img');
//le asigno un atributo a img con un link a una foto
img.setAttribute('src', 'https://www.purina.com.ar/sites/default/files/styles/webp/public/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg.webp?itok=9zgitaBO');
console.log(img);
//inserto img dentro de de otro elemento que ya existia en html
pid.append(img);

//con esta linea, borro todo el contenido que estuviese en mi parrafo p
pid.innerHTML = "";
*/




