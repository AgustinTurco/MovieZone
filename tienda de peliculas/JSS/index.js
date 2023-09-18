
    // Función para realizar la búsqueda
    function buscarPelicula() {
        // Obtén el valor del campo de entrada
        const busqueda = document.getElementById('buscar-input').value.toLowerCase();
        
        // Obtén la lista de películas
        const listaPeliculas = document.getElementById('lista-peliculas').getElementsByTagName('li');
        
        // Variable para verificar si se encontraron resultados
        let resultadosEncontrados = false;
        
        // Recorre la lista de películas y muestra/oculta según la búsqueda
        for (let i = 0; i < listaPeliculas.length; i++) {
            const pelicula = listaPeliculas[i].textContent.toLowerCase();
            if (pelicula.includes(busqueda)) {
                listaPeliculas[i].style.display = 'none';
                resultadosEncontrados = true;
            } else {
                listaPeliculas[i].style.display = 'block';
                resultadosEncontrados = true;
            }
        }
        
        // Muestra u oculta el elemento de resultados según si se encontraron resultados
        const resultadosDiv = document.getElementById('resultados');
        if (resultadosEncontrados) {
            resultadosDiv.style.display = 'block';
        } else {
            resultadosDiv.style.display = 'none';
        }
    }

    // Agrega un evento de escucha para el envío del formulario
    document.getElementById('buscar-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Evita la recarga de la página
        buscarPelicula();
    });

    // Agrega un evento de escucha para el cambio en el campo de búsqueda
    document.getElementById('buscar-input').addEventListener('input', buscarPelicula);
