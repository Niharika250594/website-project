var imgArray=["images\/Kamal.jpg","images\/sundarayyaa.jpg"]
var counter=-1;
function imgmv(){
    
    counter++;
        //var y="images\/7.jpg";
        //var z="alterante one"
    if(counter<imgArray.length){
       
    document.getElementById('i3').src=imgArray[counter];
    }
    else{
       counter=0 ;
       
       document.getElementById('i3').src=imgArray[counter];
       document.getElementById('i3').classList.add("okay")
       
    }
    
   
}
setInterval(() => {
    imgmv()
},3000);
/*setInterval(()=>{
  document.getElementById("i3").classList.add('okay')
},4000)*/