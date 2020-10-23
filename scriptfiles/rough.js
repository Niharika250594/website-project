  function x(n){
     n.value=n.value
  }
  
      $('#b1').click(function(){
        
       /* $('#d4').css("display","block")*/
       var x=document.getElementById('ip1').value;
       var y=document.getElementById('ip2').value;
       var z=document.getElementById('ip3').value;
      if(x==""&&y===""&&z===""){
           alert('plz fill the details')
        }
        else if(x==""||y==""||z==""){
            alert('please fill the all details')
        }else{
        var html1=`<tr width=100% height=50% "><td style="margin-top:8rem">%1%</td><td style="margin-top:8rem">%2%</td><td style="margin-top:6rem">%3%</td></tr>`;
        var html2=html1.replace('%1%',x);
        var html3=html2.replace('%2%',y);
        var html4=html3.replace('%3%', z);
        /*$('#d4').css("display","block")*/
        
       document.getElementById('t1').insertAdjacentHTML('beforeend',html4)
       $('#note').css('display','none')
       $('#d3').css('display','block')
       $('#d4').css("display","block")
        
        }
      })
  
   
    
    