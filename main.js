var canvas = document.getElementById("mycanvas");
var mouse_event = "empty";
var prev_x, prev_y;
var colour = "black";
var width = 3;

ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    colour=document.getElementById("colourinput").value;
    width=document.getElementById("widthinput").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;
        ctx.moveTo(prev_x, prev_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    prev_x = current_x;
    prev_y = current_y;
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
}