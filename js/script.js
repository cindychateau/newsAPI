const API_KEY = "9d6694e3855549bdb32d90553e1d56eb";
async function obtenerNoticias(event) {
    event.preventDefault();

    var busqueda = document.querySelector('#busqueda').value;
    var cantidad = document.querySelector('#cantidad').value;
    
    //var response = await fetch(`https://newsapi.org/v2/everything?q=${busqueda}&pageSize=${cantidad}&apiKey=${API_KEY}`);
    var response = await fetch("https://newsapi.org/v2/everything?q="+busqueda+"&pageSize="+cantidad+"&apiKey="+API_KEY);
    var responseJson = await response.json();

    console.log(responseJson);

}

var formulario = document.querySelector('#formularioNoticias');
formulario.addEventListener('submit', obtenerNoticias);