(function(){
    'use strict';
    setRemUnit();
    //dpr -> scale = 1 / dpr
    var docEl = document.documentElement;
    var viewportEl = document.querySelector('meta [ name = "viewport" ]');
    var dpr = window.devicePixelRatio;
    var maxWidth=540;
    var minWidth=320;
    dpr >= 3 ? 3 : (dpr >= 2 ? 2 :1);
    docEl.setAttribute('data-dpr',dpr);
    docEl.setAttribute('maxWidth',maxWidth);
    docEl.setAttribute('minWidth',minWidth);
    var scale = 1 / dpr;
    var content='width=device-width, initial-scale = ' + scale + ', maximun-scale= ' + scale + ', minimun-scale= ' + scale + ', user-scaleble = no';
    if(viewportEl){
        viewportEl.setAttribute('content', content);
    }else{
        viewportEl.document.createElement('meta');
        viewportEl.setAttribute('name', viewport);
        viewportEl.setAttribute('content', content);
        document.head.appendChild(viewportEl);

    }

    window.addEventListener('resize', setRemUnit);
    function setRemUnit(){
        // 1rem = viewWidth / 18.75
        var ratio = 18.75;
        var viewwidth = docEl.getBoundingClientRect().width || window.innerWidth;
        if(maxWidth && (viewWidth / dpr > maxWidth)){
            viewwidth = maxWidth *dpr;
        }else if(minWidth && (viewWidth / dpr < minWidth)){
            viewwidth = minWidth *dpr;
        }
        docEl.style.fontSize = viewwidth / ratio + 'px';  
    }
})()