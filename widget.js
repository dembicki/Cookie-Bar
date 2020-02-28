class Bar {
    constructor(obj){
        this.obj = {
            message: 'test',
            position: 'top'
        }

        createBar(obj.message, obj.position);
    }

}

function createBar(message, position){
    let x = document.createElement('div');
    x.classList.add('wrapper');
    x.innerHTML = message;
    document.body.appendChild(x);

    if(position == 'top'){
        x.style.top = '0';
    }else if (position== 'bottom'){
        x.style.bottom = '0';
    }
    else{
        x.style.display = 'none';
    }
}

let myBar = new Bar ({
    message:'lorem ipsum',
    position:'top'
}
);

console.log(myBar);

