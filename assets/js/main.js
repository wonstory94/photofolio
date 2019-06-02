function menubar(){
    var menu_bar = document.getElementById('menu_bar');
    var nav_back = document.getElementById('nav_back');
    var menu_togle = menu_bar.classList.contains('none_active');
    if(menu_togle){
        menu_bar.classList.remove('none_active');
        menu_bar.classList.add('active');
        nav_back.classList.add('active');

    }
    else{
        menu_bar.classList.add('none_active');
        menu_bar.classList.remove('active');
        nav_back.classList.remove('active');
    }
}