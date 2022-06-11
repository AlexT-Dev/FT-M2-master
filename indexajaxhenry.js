window.onload = function() {
    let prog = document.getElementsByTagName('img');
    prog[0].style.visibility = 'hidden'
}


let btnVer = document.getElementById('boton');
btnVer.addEventListener('click', () => {
    //codigo para ver los amigos
    ViewFriends()
});

function ViewFriends() {
    let url = 'http://localhost:5000/amigos/'
    let listaA = document.getElementById('lista');
    listaA.innerHTML = '' //limpiar el contenedor
    fetch(url)
        .then(response => response.json())
        .then(Objetos => {
            Objetos.forEach(element => {
                let item = document.createElement('li');
                item.appendChild(document.createTextNode(element.id + '-' + element.name))
                item.setAttribute('value', element.id);
                listaA.appendChild(item);
            });
        })
        .catch(error => {
            listaA.innerHTML = '<p>' + error + '</p>'
        })
}

//Buscar
let btnBusqueda = document.getElementById('search');
btnBusqueda.addEventListener('click', () => {
    //codigo para ver los amigos
    let idvalue = document.getElementById('input').value;
    //if (idvalue === null || idvalue === undefined || idvalue === '') return alert('Debe proporcionar un identificador');
    if (!idvalue) return alert('Debe proporcionar un identificador');
    FindFriends(idvalue)
});

function FindFriends(idValue) {

    let url = 'http://localhost:5000/amigos/' + idValue

    let info = document.getElementById('amigo'); //contenedor
    let prog = document.getElementsByTagName('img'); //mostrar imag

    prog[0].style.visibility = 'visible'

    info.innerHTML = ''

    let myHeaders = new Headers();

    let myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    let myRequest = new Request(url, myInit);
    let table = ''

    fetch(myRequest)
        .then((resp) => resp.json())
        .then(function(objeto) {
            table += '<table>'
            let claves = Object.keys(objeto);
            for (let i = 0; i < claves.length; i++) {
                let clave = claves[i];
                table += '<tr>'
                table += '<td class="property">' + clave + '</td>'
                table += '<td class="value">' + objeto[clave] + '</td>'
                table += '</tr>'
            }
            table += '</table>'
            info.innerHTML = table;
        })
        .catch(function(error) {
            console.log(error);
            info.innerHTML = '';
        });

    prog[0].style.visibility = 'hidden'
}

//Borrar
let btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click', () => {
    //codigo para ver los amigos
    let idDelete = document.getElementById('inputDelete').value;
    if (!idDelete) return alert('Debe proporcionar un identificador');
    DeleteFriend(idDelete)
});

function DeleteFriend(idvalue) {
    let myHeaders = new Headers();

    let myInit = {
        method: 'DELETE',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    let url = 'http://localhost:5000/amigos/' + idvalue

    let myRequest = new Request(url, myInit);
    let respuest = document.getElementById('success');
    respuest.innerHTML = ''
    fetch(myRequest)
        .then((resp) => resp.json())
        .then(function(objetos) {
            respuest.innerHTML = '<br><b> Amigo Eliminado </b>'
            ViewFriends()
        })
        .catch(function(error) {
            console.log(error);
        });

}