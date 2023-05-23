window.sr = ScrollReveal({reset: true});

sr.reveal('h1,p,h2,h3,.circle1,.circle2',{duration:1000});
sr.reveal('h1,p,h2,h3, .circle1, .circle2',{
    rotate:{ x:100, y:0, z:0}
}
);


const btn = document.querySelector("#navbtn");
const sidebar = document.querySelector("#sidebar-nav");

btn.onclick = () => {
    sidebar.dataset.active = (sidebar.dataset.active === "false") ? "true" : "false"
    btn.dataset.active = (btn.dataset.active === "false") ? "true" : "false"
}

const lis = document.querySelectorAll("li");

lis.forEach(li =>{
    li.onclick = () => {
        sidebar.dataset.active = "false"
        btn.dataset.active = "false"
    }
})
