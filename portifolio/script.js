// SCRIPT


// Documents


function _(id){
    return document.getElementById(id);
}

function _onMethod(id, num){
    
    if(num == 0){

        _(id).style.opacity = "1";
        _(id).style.visibility = "visible";
        _('body').style.overflow = "hidden";

    }
    else{

        _(id).style.opacity = "0";
        _(id).style.visibility = "hidden";
        _('body').style.overflow = "auto";

    }

}


// Menu


function _menuMethod(num){

    if(num == 0){

        _('_mobile').style.opacity = "1";
        _('_mobile').style.visibility = "visible";
        _('_mobile-box').style.transform = 'translateX(0)';
        _('_mobile-box').style.opacity = "1";
        _('_mobile-box').style.visibility = "visible";
        _('body').style.overflow = "hidden";

    }
    else{

        _('body').style.overflow = "auto";
        _('_mobile').style.opacity = "0";
        _('_mobile').style.visibility = "hidden";
        _('_mobile-box').style.transform = 'translateX(50%)';
        _('_mobile-box').style.opacity = "0";
        _('_mobile-box').style.visibility = "hidden";

    }

}

function _mobileMethod(id){

    _menuMethod(1);
    _scrollMethod(id);

}

function _scrollMethod(id){

    _(id).scrollIntoView({ 
        behavior: 'smooth' 
    });

}


// Project Method


function _proMethod(id, num, name){

    _onMethod(id, num);

    if(num == 0){
        _URL_Method(name);
    }
    else{
        _URL_Remove();
    }

}

function _nextMethod(old, id, name){

    _(id).style.opacity = "1";
    _(id).style.visibility = "visible";
    _(old).style.opacity = "0";
    _(old).style.visibility = "hidden";

    _URL_Method(name);

}

function _slideMethod(num){

    if(num == 0){
        _('lean-slide').scrollLeft += _('lean-box').offsetWidth + 40;
    }
    else{
        _('lean-slide').scrollLeft -= _('lean-box').offsetWidth + 40;
    }

}


// Share Method


function _shareMethod(num){

    if(num == 0){

        _('popup').style.opacity = "1";
        _('popup').style.visibility = "visible";

    }
    else{

        _('popup').style.opacity = "0";
        _('popup').style.visibility = "hidden";

    }

}

function _copyMethod(){

    navigator.clipboard.writeText(_('link').value);
    _('IButton').style.background = '#2c7873';
    _('Iclone').style.opacity = '0';
    _('Iclone').style.visibility = 'hidden';
    _('Icheck').style.opacity = '1';
    _('Icheck').style.visibility = 'visible';

    setTimeout(delayedFunction, 2000);

}

function delayedFunction() {
    
    _('IButton').style.background = 'steelblue';
    _('Iclone').style.opacity = '1';
    _('Iclone').style.visibility = 'visible';
    _('Icheck').style.opacity = '0';
    _('Icheck').style.visibility = 'hidden';

}
  


// Pricing Method


function _pricing(id, num){

    if(num == 0){
        _(id).style.transform = "translateY(0)";
        _onMethod(id, num);
    }
    else{
        _(id).style.transform = "translateY(40%)";
        _onMethod(id, num);
    }

}


// URL Method


function _URL_Method(name){
    
    var link = _PATH + '?' + name;
    window.history.pushState("", "", link);
    _('link').value = _URL;

}

function _URL_Remove(){
    
    window.history.pushState("", "", _PATH);

}


// Content


const _PATH = window.location.pathname;
var _URL = window.location.href;

document.addEventListener("DOMContentLoaded", () => {

    // Request

    var _is = false;
    var list = [ "cabra", "febco", "dreamy" ]

    if(_URL.indexOf('?') > -1){
        var name = _URL.split('?')[1];
        for( let i = 0; i < list.length; i++ ){
            if(name == list[i]){
                _is = true;
                _proMethod('pro_' + name, 0, name);
            }
        }
    }

    if(_is != true){
        _URL_Remove();
    }

    // Slider

    const slider = _('lean-slide');
    let isDragging = false, StartX, StartSL;

    const dragStart = (e) => {
        isDragging = true;
        slider.classList.add('_draggin');
        StartX = e.pageX;
        StartSL = slider.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return;
        slider.scrollLeft = StartSL - (e.pageX - StartX);
    }

    const dragStop = () => {
        isDragging = false;
        slider.classList.remove('_draggin');
    }

    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('mousemove', dragging);
    slider.addEventListener('mouseup', dragStop);

});


