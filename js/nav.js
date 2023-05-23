const nav = document.querySelector("nav");

window.onscroll = () =>{
    if(window.scrollY > 0){
        nav.dataset.active = "true"
    }else{
        nav.dataset.active = "false"
    }
};

