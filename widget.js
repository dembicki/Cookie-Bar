class Bar {
    constructor(message,position){
        this.message = position;
        this.position = message;
        createBar(message,position);
    }

}

function createBar(message, position){
    let x = document.createElement('div');
    x.classList.add('wrapper');
    x.innerHTML = message;
    document.body.appendChild(x);
    // btn = document.createElement('button');
    // btn.append(x);

    if(position == 'top'){
        x.style.top = '0';
    }else{
        x.style.bottom = '0';
    }
}

let myBar = new Bar ('test','top');

