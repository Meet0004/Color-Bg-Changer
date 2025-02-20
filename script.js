const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const opacity = document.getElementById("opacity");
const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const lightness = document.getElementById("lightness");
const alpha = document.getElementById("alpha");


function updateHEX() {
    let r = parseInt(red.value).toString(16).padStart(2, "0");
    let g = parseInt(green.value).toString(16).padStart(2, "0");
    let b = parseInt(blue.value).toString(16).padStart(2, "0");
    let hexColor = `#${r}${g}${b}`;
    document.getElementById("hexValue").textContent = hexColor;
}

function updateRGBA() { 
    let r = red.value;
    let g = green.value;
    let b = blue.value; 
    let o = opacity.value;
    let rgbaColor = `RGBA(${r}, ${g}, ${b}, ${o})`;
    document.getElementById("r").textContent = r; 
    document.getElementById("g").textContent = g;
    document.getElementById("b").textContent = b;
    document.getElementById("o").textContent = o;

    document.body.style.backgroundColor = rgbaColor;
}

function updateHSLA() {
    let h = hue.value;
    let s = saturation.value;
    let l = lightness.value;
    let a = alpha.value;

    let hslaColor = `HSLA(${h}, ${s}%, ${l}%, ${a})`;
    document.getElementById("h").textContent = h;
    document.getElementById("s").textContent = s;
    document.getElementById("l").textContent = l;
    document.getElementById("a").textContent = a;

    document.body.style.backgroundColor = hslaColor;
}

function update_two() {
    updateHEX();
    updateRGBA();

}
function update_one(){
    updateHSLA();
}

[red, green, blue, opacity].forEach(slider => {
    slider.addEventListener('input', update_two);
});

[hue, saturation, lightness, alpha].forEach(slider => {
    slider.addEventListener('input', update_one);
});


const copyButtons = document.querySelectorAll('.copy');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
    
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
    
        tempInput.value = targetElement.textContent || targetElement.innerText;
    
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
    
        document.execCommand('copy');
    
        document.body.removeChild(tempInput);
    });
});  
