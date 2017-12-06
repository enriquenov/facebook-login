$(document).ready(function(){

  var swap = true;

  $("#swap").click(function(){
        if (swap===false) {
          $("#swap").html("facebook");
          swap = true;
        } else {
          $("#swap").html("Enrique Novoa");
          swap = false;
        }
      })

});
