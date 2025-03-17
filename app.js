/* 
    El principal objetivo de este desafío es fortalecer tus habilidades 
    en lógica de programación. Aquí deberás desarrollar la lógica para 
    resolver el problema.
*/

let Amigos = [];
let index = 0;

function agregarAmigo()
{
    let Nombres = document.getElementById('amigo').value.trim();

    if (Nombres)
    {
        Amigos.push(Nombres);
        Actualizar();
        Limpiar();
    }

    else
    {
        alert('Por favor ingresa un nombre valido :/');
    }
};

function Actualizar()
{
    let Lista = document.getElementById('listaAmigos');
    Lista.innerHTML = '';

    Amigos.forEach((amigo) =>
    {
        let New = document.createElement('li');
        New.textContent = amigo;
        Lista.appendChild(New);
    });

}

function sortearAmigo()
{
    if(Amigos.length < 1)
    {
        alert('Debes ingresar al menos 1 nombre para iniciar el sorteo uwur');
        return;
    }

    let Sorteo = Math.floor(Math.random() * Amigos.length);
    let MyFriend = Amigos[Sorteo];

    Resultado(MyFriend);
    Amigos.splice(Sorteo, 1);

    Actualizar();

    if (Amigos.length === 0) 
    {
        alert('Todos tus amigos han sido sorteados ;)');
    }

};

function Resultado(MyFriend)
{
    let Show = document.getElementById('resultado');
    Show.innerHTML = `<p>Tu Amigo Secreto es: ${MyFriend} :3</p>`;
};

function Limpiar()
{
   document.querySelector('#amigo').value = '';
};

function Update()
{
    let Lista = document.getElementById('listaAmigos');
    Lista.innerHTML = Amigos.map(MyFriend => `<li>${MyFriend}</li>`).join('');
}