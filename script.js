function traer() {
    const xmlhttp = new XMLHttpRequest();
    const btn = document.getElementById('btn');

    xmlhttp.onreadystatechange = function () {

        // Cuando volvio la respuesta evaluo que este ok
        if (this.readyState == 4 && this.status == 200) {

            // Parseo la informacion de respuesta
            let datos = JSON.parse(this.responseText);

            // Asigno lso 4 datos para mostrar
            document.getElementById('textDate').textContent = datos.date;
            document.getElementById('textTitle').textContent = datos.title;
            document.getElementById('textExplanation').textContent = datos.explanation;
            document.getElementById('picture').src = datos.hdurl;

            // Muestro el container con los datos que asigne
            document.getElementById('container').hidden = false;
            // Escondo el boton
            btn.hidden = true;
        }
    }

    xmlhttp.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    xmlhttp.send();
}