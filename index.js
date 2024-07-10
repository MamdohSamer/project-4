let main=window.document.body;
let coun=0;
let btn =document.querySelector("button");
let fi=document.querySelector("div");
let tri=document.querySelector("section");
console.log(fi);
console.log(tri);
console.log(btn);
btn.onclick=function(){
    coun++;
    if(coun%2===0){
        btn.style.backgroundColor=("rgb(237, 241, 250)");
        fi.style.display= "none";
        tri.style.display= "none";

    }else{
        btn.style.backgroundColor=("rgb(109, 127, 151)");
        fi.style.display= "block";
        tri.style.display= "block";
    }
    console.log(10)

}
