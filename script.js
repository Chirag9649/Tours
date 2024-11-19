let slides = document.getElementById("slides")
function change(event){
    slides.src = event.target.src
}

let imglist = document.querySelectorAll("#flexbox img")
let srclist = [];
for(let img of imglist){
    
    srclist.push(img.src)
}
let currentIndex = 0;
function Next(){
    if(currentIndex<srclist.length-1){
        currentIndex++;
        slides.src = srclist[currentIndex]
    }
    else{
        currentIndex=0;
        slides.src = srclist[currentIndex]
    }
}

function Prev(){
    if(currentIndex>0){
        currentIndex--;
        slides.src = srclist[currentIndex]
    }
    else{
        currentIndex=srclist.length-1;
        slides.src = srclist[currentIndex]
    }
}