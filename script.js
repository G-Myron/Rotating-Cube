var cube = document.querySelector(".cube");
var x0,y0;
var [initialAngX, initialAngY] = [0, 0];

cube.addEventListener("drag", rotateCube);
cube.addEventListener("dragstart", firstTouch);
cube.addEventListener("dragend", endRotation);



function firstTouch(event) {
    [x0,y0] = [event.x,event.y];
    
    event.dataTransfer.setDragImage(new Image(), 0, 0);
}

function rotateCube(event) {

    dx = event.x - x0;
    dy = event.y - y0;

    angY =  dx /2;
    angX = -dy /2;

    cube.style.setProperty("transform",
        `translateZ(-35vmin) rotateX(${initialAngX + angX}deg) rotateY(${initialAngY + angY}deg)`);
    
    return [initialAngX + angX, initialAngY + angY];
}

function endRotation(event) {
    [initialAngX, initialAngY] = rotateCube(event);
}

