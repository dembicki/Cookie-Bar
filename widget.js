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

 const createBar = (message, position) => {
    let bar = document.createElement('div');
    bar.classList.add('wrapper','hide');
    bar.innerHTML = message;
    document.body.appendChild(bar);

    let getWidget = document.createElement('a');
    getWidget.innerHTML = 'Get widgets';
    getWidget.classList.add('getWidget','hide');
    bar.appendChild(getWidget);
    getWidget.addEventListener('click', () => alert('hello world'));

    if(position == 'top'){
        bar.style.top = '0';
    }else if (position== 'bottom'){
        bar.style.bottom = '0';
    }
}

const createShowBarButton = () => {
    let showBar = document.createElement('a');
    showBar.classList.add('showBar');
    showBar.innerHTML = 'Show Bar';
    document.body.appendChild(showBar);
    showBar.addEventListener('click', () => {
        let close = document.querySelector('.close');
        let bar = document.querySelector('.wrapper');
        let getWidget = document.querySelector('.getWidget');
        getWidget.style.display = 'block';
        close.style.display = 'block';
        bar.style.display = 'block';
        bar.style.height = '50px';
    })
}; 


let myBar = new Bar ({
    message:'Add beautiful widgets to your website',
    position:'bottom'
}
);


console.log(myBar);

