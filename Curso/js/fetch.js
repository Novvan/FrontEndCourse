'use strict';

//fetch(ajax) y petititons
var usuarios = [];
var div_usuarios = document.querySelector('#users')
var div_jannet = document.querySelector('#jannet')

getUsers()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getJannet();
    })
    .then(data => data.json())
    .then(user => {
        showJannet(user.data);
        return getInfo();
    }).then(data => {
        console.log(data)
    });

function getUsers() {
    return fetch('https://reqres.in/api/users');
}

function getJannet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
    var profesor = {
        nombre: 'ian',
        apellido: 'geier',
    };
    return new Promise((resolve, reject) => {

        var profesor_string = JSON.stringify(profesor);

        if (typeof profesor_string != 'string') return reject('Error');
        else return resolve(profesor_string);
    })
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');

        nombre.innerHTML = i + " ) " +
            user.first_name + " " +
            user.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector("#users span.loading").style.display = 'none';
    })
}

function showJannet(user) {

    let nombre = document.createElement('h4');

    nombre.innerHTML = user.first_name + " " + user.last_name;

    div_jannet.appendChild(nombre);

    document.getElementById('jannetld').style.display = 'none';

}