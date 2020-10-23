function todisplay(){
    document.getElementById('customizeselect').style.display="block";
    document.getElementById('contentid').style.display="none";
    document.getElementById('footerid').style.display="none"
}
function valueget(n){
    n.value=event.target.value
}
 
    function add(){
        
        var  x=document.getElementById('s1').value;
        var y=document.getElementById('s2').value;

        if((x===""||x==="-")&&(y===""||y==="-")){
            alert('plz choose the size')
            
        }
        else if((x===""||x==="-")&&y===document.getElementById('s2').value){
               alert('plz choose width too')
        }
        else if(x===document.getElementById('s1').value&&(y===""||y==="-")){
            alert('plz choose height too')
        }
        else{
            var s3;
            if((x=='2ft'&&y=='2ft')||((x=='2ft'&&y=='3ft')||(x=='3ft'&&y=='2ft')||(x=='2ft'&&y=="4ft"))){
                s3='3000/-'
            }else if((x=='3ft'&&y=='3ft')||((x=='3ft'&&y=='4ft')||(x=='4ft'&&y=='3ft'))||(x=='2ft'&&y=='5ft')||(x=='3ft'&&y=='5ft')){
                s3="4000/-"
            }else if((x=='4ft'&&y=='4ft')||((x=='4ft'&&y=='5ft')||(x=='5ft'&&y=='4ft'))){
                s3="5000/-"
            }else if(x=='5ft'&&y=='5ft'){
                s3='5500/-'
            }
            else{
                alert('choose height as max');
                return null
            }
            var html1=`<tr><th><span >%1%*</span><span >%2%</span></th><th>cost:%3%</th></tr>`
        var html2=html1.replace('%1%',x);
        var html3=html2.replace('%2%',y);
        var html4=html3.replace('%3%',s3);
        document.getElementById('tr1').style.display="block";
        document.getElementById('table1').insertAdjacentHTML('beforeend',html4);
       x.value="";
        y.value="";
        }
    }
    function linkclick(){
        document.getElementById('contentid').style.display="flex";
        document.getElementById('customizeselect').style.display="none";
        document.getElementById('footerid').style.display="block"
    }
  