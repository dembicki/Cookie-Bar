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
    let x = document.createElement('div');
    x.classList.add('wrapper','hide');
    x.innerHTML = message;
    document.body.appendChild(x);

    let getWidget = document.createElement('a');
    getWidget.innerHTML = 'Get widgets';
    getWidget.classList.add('getWidget','hide');
    x.appendChild(getWidget);


    if(position == 'top'){
        x.style.top = '0';
    }else if (position== 'bottom'){
        x.style.bottom = '0';
    }
}

const createShowBarButton = () => {
    let showBar = document.createElement('a');
    showBar.classList.add('showBar');
    showBar.innerHTML = 'Show Bar';
    document.body.appendChild(showBar);
    showBar.addEventListener('click', () => {
        let bar = document.querySelector('.wrapper');
        let getWidget = document.querySelector('.getWidget');
        getWidget.style.display = 'block';
        bar.style.display = 'block';
        bar.style.height = '50px';
    })
}; 


let myBar = new Bar ({
    message:'Add beautiful widgets to your website',
    position:'top'
}
);


console.log(myBar);

