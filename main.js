
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
var screen_width = screen.width;
var new_width = screen.width - 70
var new_height = screen.height - 300

if (screen_width < 992) {

    canvas.width = new_width
    canvas.height = new_height
    document.body.style.overflow = "hidden"
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e) {
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends

}



canvas.addEventListener("touchmove", touchmove);
function touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();


    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}

function clear_canvas(){

ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height)


}

