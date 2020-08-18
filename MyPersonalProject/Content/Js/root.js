$(Document).ready(function(){
    $("#Menu").change(function(){
         food();
    });
 
   });
 
   function food() {
     var menu = $("#Menu").val();
     if(menu=="SWALLOW") {
       alert("swallow");
     }
   }
    