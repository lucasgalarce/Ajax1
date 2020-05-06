function traer(){
    const xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            document.getElementById('parrafo').textContent += datos.date;
            document.getElementById('parrafo2').textContent += datos.title;
            document.getElementById('parrafo3').textContent += datos.explanation;
            document.getElementById('picture').src = datos.hdurl;

            document.getElementById('container').hidden = false;
        }
    }

    xmlhttp.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    xmlhttp.send();
}