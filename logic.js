let containerdiv = document.createElement('div');
containerdiv.id = "container";
document.body.appendChild(containerdiv);

function palletsize(){
    let len = prompt("lenght of the pallet");
    containerdiv.style.gridTemplateColumns = `repeat(${len}, 50px)`
    pallete(len*len);
}

function pallete(e){
    let number = 0;
    for(let i=0; i<e; i++){
        let paletediv = document.createElement('div');
        paletediv.className = "gridelement";
        paletediv.id = `grid${number}`;
        number++
        containerdiv.appendChild(paletediv);
        console.log(paletediv.id)
    }
}

palletsize();