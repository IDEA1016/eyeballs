const pupil = document.getElementsByClassName("pupil");

//함수 작성 타입 1
/*
document.onmousemove = function(e){
    var x = e.clientX * 100 / window.innerWidth + "%";
    var y = e.clientY * 100 / window.innerHeight + "%";

    for(i=0;i<2;i++){
        pupil[i].style.left = x;
        pupil[i].style.top = y;
    }
}
*/
//합수 작성 타입 2


function handleMove(event){
    const x = event.clientX * 100 / window.innerWidth + "%";
    const y = event.clientY * 100 / window.innerHeight + "%";

    for(i=0;i<2;i++){
        pupil[i].style.left = x;
        pupil[i].style.top = y;
    }
}

document.addEventListener("mousemove", handleMove)