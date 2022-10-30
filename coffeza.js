$(document).ready(function(){
    $(".fa-regular").click(function(){
        $(".fa").hide(1000, function(){
          $(".fb").show(1000);
        });
      });

      $(".a,.fa-solid").click(function(){
        $(".fb").hide(1000, function(){
          $(".fa").show(1000);
        });
      });

      $(".fa-regular").click(function(){
        $(".sa").hide(1000, function(){
          $(".sb").show(1000);
        });
      });

      $(".fa-solid").click(function(){
        $(".sb").hide(1000, function(){
          $(".sa").show(1000);
        });
      });

      $(".fa-regular").click(function(){
        $(".ta").hide(1000, function(){
          $(".tb").show(1000);
        });
      });

      $(".fa-solid").click(function(){
        $(".tb").hide(1000, function(){
          $(".ta").show(1000);
        });
      });

      
      $(".fa-star").dblclick(function(){
        $(this).css("color","initial");
      })
      
      $(".fa-star").mousedown(function(){
        $(this).css("color","#deb887");
      })
       




      

  });