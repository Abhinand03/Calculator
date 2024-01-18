 
 Exp=(e)=>{
    display.value+=e.target.id
 }


 function result()
 {
   if(display.value=="")
   {
    alert("enter an expression!!!")
   }
   else
   {
    try{
        display.value=eval(display.value)
    }
    catch
    {
        alert("enter valid expression")
        display.value=""
    }
   }
 }

 cl=()=>
 {
    display.value=""
 }

 back=()=>{
   
      display.value = display.value.slice(0, -1);
    
 }