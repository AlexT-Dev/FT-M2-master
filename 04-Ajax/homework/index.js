//Para obetener la lista
var getAmigos = () => { //=> recibe una función arrow fuction


    $.get("http://localhost:5000/amigos", amigos => {
        
          //  Para crear la lista a desplegar
        var lista = $('#lista');
        //si el usuario hace click otra vez 
        lista.empty();
        for (let i = 0; i < amigos.length; i++) {
            
            lista.append(`<li id=${amigos[i].id}>${amigos[i].name}</li>`);
        }
            
        })
    }


//Para desplegar a los amigos
$('#boton').click(getAmigos) 


  //Para buscar al amigo

  $('#search').click(() => { //=> recibe una función arrow fuctio

    var amigoBuscar = $('#input').val(); 
    $.get(`http://localhost:5000/amigos/${amigoBuscar}`, amigoEncontrado => {
        
        //si el amigo es encontrado 
        
            $('#amigo').text(amigoEncontrado.name);
       
       });
   });

   //Para borrar al amigo la lista
   $('#delete').click(() => { //=> recibe una función arrow fuctio

    var amigoBuscar = $('#inputDelete').val(); 
    $.ajax({
        url: `http://localhost:5000/amigos/${amigoBuscar}`,
        type: 'DELETE',
        success: () => {
            $('#success').text(`amigo id ${amigoBuscar} borrado con éxito`)
            getAmigos();
        }
    })
   });
