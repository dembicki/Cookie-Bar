class Bar {
    constructor(obj){
        this.obj = {
            message: 'test',
            position: 'top'
        }

        createBar(obj.message, obj.position);
        createShowBarButton();
    }

}

 function createBar(message, position){
    let x = document.createElement('div');
    x.classList.add('wrapper');
    x.innerHTML = message;
    document.body.appendChild(x);
    x.style.display = 'none';

    if(position == 'top'){
        x.style.top = '0';
    }else if (position== 'bottom'){
        x.style.bottom = '0';
    }
}

function createShowBarButton(){
    let showBar = document.createElement('a');
    showBar.classList.add('showBar');
    showBar.innerHTML = 'Show Bar';
    document.body.appendChild(showBar);
    let bar = document.querySelector('.wrapper');

    showBar.addEventListener('click', () => {
        bar.style.display = 'block';
    })
}; 



let myBar = new Bar ({
    message:'Add beautiful widgets to your website',
    position:'top'
}
);

console.log(myBar);

