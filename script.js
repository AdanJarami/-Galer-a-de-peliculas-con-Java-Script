function moviess() {
    document.getElementById('movies').innerHTML = "" + movies[i].title;
}



function over() {
    document.getElementById('onmouse').style.display = 'inline';
    document.getElementById('text').innerHTML = movies[i].storyline;
    console.log(movies[0].storyline);
}

function out() {
    document.getElementById('onmouse').style.display = 'none';
}



function arriba() {
    let values = movies[i].ratings;
    let sum = values.reduce((previous, current) => current += previous);
    let avg = sum / values.length;
    let promedio = avg.toFixed(1);
    document.getElementById('down').style.display = 'none';
    document.getElementById('arriba').style.display = 'inline';
    document.getElementById('1').style.display = 'inline';
    document.getElementById('2').style.display = 'inline';
    document.getElementById('3').style.display = 'inline';
    document.getElementById('4').style.display = 'inline';
    document.getElementById('1').innerHTML = "Release date: " + movies[i].releaseDate;
    document.getElementById('2').innerHTML = "Actors: " + movies[i].actors;
    document.getElementById('3').innerHTML = "Rating: " + promedio;
    document.getElementById('4').innerHTML = "Genres: " + movies[i].genres;

}

function abajo() {
    document.getElementById('down').style.display = 'inline';
    document.getElementById('arriba').style.display = 'none';

    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    document.getElementById('4').style.display = 'none';
}

let i = 1;

function start() {
    document.slide.src = movies[i].posterurl;
    if (document.getElementById('arriba').style.display == 'inline') {
        arriba();
    }
    if (i == 30) {
        document.getElementById('right').style.display = 'none';
    }
    if (i < 30) {
        document.getElementById('right').style.display = 'inline';
    }
}

function changeImg() {
    i++;
    start();
    document.getElementById('left').style.display = 'inline';
    if (i == 30) {
        i = 1;
        start();
        if (i == 1) {
            document.getElementById('left').style.display = 'none';
        }
        if (i > 1) {
            document.getElementById('left').style.display = 'inline';
        }
    }
}

function returnImg() {
    i--;
    start();
    if (i == 1) {
        i = 31;
        start();
    }
}