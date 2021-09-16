var cube = document.querySelector(".cube");
var x0,y0, moving=false;
var [initialAngX, initialAngY] = [0, 0];
var currentAngX, currentAngY;


document.addEventListener("mousedown", (event)=> firstTouch(event.x,event.y));
document.addEventListener("mousemove", (event)=> rotateCube(event.x,event.y));
document.addEventListener("mouseup", endRotation);

document.addEventListener("touchstart", (event)=> firstTouch(event.touches[0].clientX,event.touches[0].clientY));
document.addEventListener("touchmove", (event)=> rotateCube(event.touches[0].clientX,event.touches[0].clientY));
document.addEventListener("touchend", endRotation);

document.querySelector("button#reset").addEventListener("click", reset);



function firstTouch(x, y) {
    moving = true;
    [x0,y0] = [x,y];
}

function rotateCube(x, y, friction = 2) {
    if(!moving) return;

    dx = x - x0;
    dy = y - y0;

    angY =  dx / friction;
    angX = -dy / friction;

    [currentAngX, currentAngY] = [initialAngX + angX, initialAngY + angY];

    cube.style.setProperty("transform",
        `translateZ(-35vmin) rotateX(${currentAngX}deg) rotateY(${currentAngY}deg)`);
}

function endRotation() {
    [initialAngX, initialAngY] = [currentAngX, currentAngY];
    moving = false;
}



function reset(){
    cube.style.setProperty("transform", "translateZ(-35vmin)");
    initialAngX= initialAngY = 0;
}
