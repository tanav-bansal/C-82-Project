canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width_of_line = 2;

var mouse_event = "empty";

radius = []

var last_position_of_X, last_position_of_Y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;
    radius = document.getElementById("radius_input").value;
    mouse_event = "mousedown";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_postionX = e.clientX - canvas.offsetLeft;
    current_postionY = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        console.log("current postion of X and Y = ")
        console.log("X = "+current_postionX, "Y = "+current_postionY)
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.line_width = width_of_line;
        ctx.arc(current_postionX, current_postionY, radius, 0, 2* Math.PI)
        ctx.stroke();
    }
    last_position_of_X = current_postionX;
    last_position_of_Y = current_postionY;
}