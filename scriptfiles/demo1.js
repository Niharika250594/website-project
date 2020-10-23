
function altr(n){
    document.getElementById('contentid').style.display="none";
    document.getElementById('footerid').style.display="none";
    document.getElementById('hiddenimg').style.display="flex";
    document.getElementById('imh').src=n.src;
    document.getElementById('imgflex').style.display="flex"

}
function altr1(){
    document.getElementById('contentid').style.display="flex";
    document.getElementById('footerid').style.display="block"
    document.getElementById('hiddenimg').style.display="none";
    
    
}

function withEnterkey(e){
   if(event.keyCode==13){
    document.getElementById('contentid').style.display="none";
    document.getElementById('footerid').style.display="none";
    document.getElementById('hiddenimg').style.display="flex";
    console.log(event.target)
    if(event.target.id=="image1"){
    document.getElementById('imh').src="images\/seniorntr.jpg"
   }else if(event.target.id=="image2"){
    document.getElementById('imh').src="images\/Cheguvera.png"
   }else if(event.target.id=="image3"){
    document.getElementById('imh').src="images\/MotherTeressa.png"
   }else if(event.target.id=="image4"){
    document.getElementById('imh').src="images\/jayaShankar.jpg"
   }else if(event.target.id=="image5"){
    document.getElementById('imh').src="images\/sundarayyaa.jpg"
   }else if(event.target.id=="image6"){
    document.getElementById('imh').src="images\/YSR.jpg"
   }else if(event.target.id=="image7"){
    document.getElementById('imh').src="images\/SeniorNTRalone.jpg"
   }else if(event.target.id=="image8"){
    document.getElementById('imh').src="images\/Rajeev Gandhi.jpg"
   }else if(event.target.id=="image9"){
    document.getElementById('imh').src="images\/Kamal.jpg"
   }
   document.getElementById('imgflex').style.display="flex";
   document.body.style.filter="blur(1)"
}
}

function customize(){
    alert('heiii')
    document.getElementById('contentid').style.display="none";
    document.getElementById('footerid').style.display="none";
    document.getElementById('customizeselect').style.display="flex";
  
    
}
function one(){
    document.getElementById('s1').innerHTML=event.target.value
}

    function selectsize(){
        document.getElementById('t1').style.display="table";
        document.getElementById('s1').innerHTML=document.getElementById('sb1').event.target.value;
        alert(document.getElementById('s1').event.target.value)
    }
