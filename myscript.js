function chngclr(){
    let letter='0123456789ABCDEF';
    let bgcolor='#';
    for(i=0;i<6;i++){
        bgcolor+=letter[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor=bgcolor;
    
    let bttnclr='#';

    for(i=0;i<6;i++){
        bttnclr+=letter[Math.floor(Math.random()*16)];
    }
    document.getElementById('button').style.backgroundColor=bttnclr;
    
    
    
    
    let fontclr='#';

    for(i=0;i<6;i++){
        fontclr+=letter[Math.floor(Math.random()*16)];
    }
    document.getElementById('button').style.color=fontclr;
}