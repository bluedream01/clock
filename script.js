setInterval(()=>{
let currenTime=new Date();
let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let hrsfix,minfix,secfix;
if(currenTime.getHours()>12){
    hrsfix=currenTime.getHours()-12;
}

hrs.innerHTML=(hrsfix<10?"0":"")+hrsfix;
min.innerHTML=(currenTime.getMinutes()<10?"0":"")+currenTime.getMinutes();
sec.innerHTML=(currenTime.getSeconds()<10?"0":"")+currenTime.getSeconds();

},1000)