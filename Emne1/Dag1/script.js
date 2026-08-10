let height = 40;
let width = 40;
function reSize(larger) {
    let element = document.querySelector(".imageList"), newHeight,newWidth;
    if (larger) {
        newHeight = height + 10;
        newWidth = width + 10;
    } else {
        newHeight = height - 10;
        newWidth = width - 10;
    }
    
    element.style.height = newHeight+"px";
    element.style.width = newWidth+"px";
    
    height = newHeight;
    width = newWidth;
}
    