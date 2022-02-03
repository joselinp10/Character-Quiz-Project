
$(".cristinayang,.mirandab,.MeredithGrey,.LexieGrey,.results") .hide();

$(".question2").click(function() {
  	 let voteInput = $(".vote").val();    
     let votes2Input = $(".vote2").val();
    $(".results").append("You are " +voteInput+ " years old and you value " + votes2Input );
    $(".results").show();
   	
    
  let vote2Input = $(".vote2").val();
  
  if (vote2Input === "career"){
     $(".results").text("You are Cristina Yang!");
     $(".cristinayang").show(); 
     $(".image,.mirandab,.MeredithGrey,.LexieGrey").hide();
    }
    else if ( vote2Input === "love"){
 	$(".results").text("You are Meredith Grey!");
    $(".MeredithGrey").show();
    $(".image,.cristinayang,.mirandab,.LexieGrey").hide();
    }
    else if (vote2Input === "wisdom"){
    $(".results").text("You are Miranda Bailey!");
    $(".mirandab").show();
    $(".image,.cristinayang,.MeredithGrey,.LexieGrey").hide();
    }
    else if (vote2Input === "honesty"){
    $(".results").text("You are Lexie Grey!");
    $(".LexieGrey").show();
    $(".image,.cristinayang,.MeredithGrey,.mirandab").hide();
    }
});

       



