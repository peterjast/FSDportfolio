/*$(document).ready(function() {
    $('#headerVideoLink').magnificPopup({
      type:'inline',
      midClick: true
    });         
  });
*/
 
  $(function () {
   $('#vidBox').VideoPopUp({
    opener:"video-trigger",
    idvideo:"demo"
    });
  });
  
$('#vidBox').VideoPopUp({
  backgroundColor:"#000000"
});


$('#vidBox').VideoPopUp({
  pausevideo:true
});

$('#vidBox').VideoPopUp({
  maxweight:"640"
});

$('#vidBox').VideoPopUp({

  backgroundColor:"#17212a",

  opener:"trigger",

  maxweight:"640",

  idvideo:"example"
});
