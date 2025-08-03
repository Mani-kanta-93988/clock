let hr=document.getElementById("ho");
let mi=document.getElementById("mi");
let se=document.getElementById("se");

function diplaytime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hrotations=30*hh+mm/2;
    let mrotations=6*mm;
    let srotations=6*ss;
    hr.style.transform=`rotate(${hrotations}deg)`;
    mi.style.transform=`rotate(${mrotations}deg)`;
    se.style.transform=`rotate(${srotations}deg)`;

}
setInterval(diplaytime,1000);

