setInterval(animate_layer_6, 500);
var deg6 = 3.75;
function animate_layer_6(){
    document.getElementsByClassName("layer-6")[0].style.transform = "rotate(" + deg6 + "deg)";
    deg6 += 3.75;
}