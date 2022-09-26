let tekst = document.getElementById("knappTekst");
let knapp = document.getElementById("knapp");
let counter = 0;
let ab;

knapp.onclick = knappKlikk;

function knappKlikk() {
    counter++;
    if(counter === 6) {
        let newElement = document.createElement("img");
        newElement.id = "image";
        newElement.src = "https://www.h-a.no/wp-content/uploads/2020/11/0884efc2-d008-907d-22d2-8256b142944e.JPG";
        newElement.style = "width: 200px;"
        document.body.appendChild(newElement);
        ab = document.getElementById("image");
        ab.onmouseover = function() {
            ab.style.visibility = "hidden";
        };
        bytt();
    }

    if(knapp.innerHTML === "default") {
        knapp.style.backgroundColor = "red";
        knapp.innerHTML = "red";
    } else if(knapp.innerHTML === "red") {
        knapp.style.backgroundColor = "blue";
        knapp.innerHTML = "blue";
    } else if(knapp.innerHTML === "blue") {
        knapp.style.backgroundColor = "white";
        knapp.innerHTML = "default";
    }
}

function bytt() {
    let el = document.getElementById("image");
    let i = 0;
    while(i < 10) {
        i++;
        

        if(el.src === src1) {
            el.src = src2;
        } else {
            el.src = src1;
        }
    }
}



