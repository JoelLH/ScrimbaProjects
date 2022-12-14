

const colorForm = document.getElementById('color-form');
const colorsContainer = document.getElementById("body");
const namesContainer = document.getElementById('footer');
const developer = document.getElementById('developer');

let namesArr= [];


colorForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    render()
    
})

function copyToClipboard(textArr) {
    window.prompt("Press Ctrl + C to copy", textArr.join(' | '));
}

function render(){
    const form = new FormData(colorForm);
    const color = form.get('color').slice(1);
    const scheme = form.get('scheme');
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`,{ method: "GET" })
        .then(res => res.json())
        .then(data => {
            let colorHtml ="";
            let namesHtml ="";
            let colorArr = [];

            data.colors.forEach((color)=>{
                colorHtml += `
                <div class="color-div" style="background-color:${color.hex.value};">
                </div>`

                namesHtml += `
                <div class="hex-value">
                ${color.hex.value}
                </div>`

                colorArr.push(color.hex.value)
            })
            namesArr = colorArr
            colorsContainer.innerHTML = colorHtml;
            namesContainer.innerHTML = namesHtml;
            developer.style.color = `#${color}`
        })
}

namesContainer.addEventListener('click',()=>{
    copyToClipboard(namesArr)
})

render()