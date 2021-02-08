//首頁slider
$(document).ready(function(){
  $('.banner').slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
  });
  $('.hot_title_slider').slick({
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    arrows: false,
    vertical: true,
  });
})


//---------------首頁slider END------------------------------------//


//menu
var list_quantity = {list01:8,list02:2,list03:4,list04:2,list05:3,list06:3};
var list_switches = {list01:false,list02:false,list03:false,list04:false,list05:false,list06:false,}
if( $(window).width() >1024){
  $('.navbar_btn').mouseover(function(){
    $('.lists').css("height","0px");
    // $('.lists li').toggle(500,false);
    if($(this).attr('id') != undefined ) {
      let mouseOnBtn_now = "#" + $(this).attr('id').slice(0,6);
      let listNumber = $(this).attr('id').slice(0,6);  
      let list_height = 50 * list_quantity[listNumber] + 2 -10;
  
      $(mouseOnBtn_now).css("height",list_height);
  
      // $(mouseOnBtn_now).toggle(500,true);
    }
  });
  
  $('.top_nav').mouseover(function(){
    $('.lists').css("height","0px");
    // $('.lists').toggle(500,false);
  });
  
  $('.banner').mouseover(function(){
    $('.lists').css("height","0px");
    // $('.lists').toggle(500,false);
  });
  
}else if($(window).width() <= 1024){
  
  $('.navbar_btn').on('click',function(){
    if($(this).attr('id') != undefined){
      $('.phone_navlist').css("height","auto");
      let clickBtn = "#" + "phone_" + $(this).attr('id').slice(0,6);
      let listNumber = $(this).attr('id').slice(0,6);
      let list_height = 50 * list_quantity[listNumber] + 2 - 10;
      var list_switch = list_switches[listNumber];
  
      if(list_switch == false){
        $(clickBtn).css("height",list_height);
        setTimeout(function(){
          list_switches[listNumber] = true;
        },500);
      };
      if(list_switch == true){
        $(clickBtn).css("height","0px");
        setTimeout(function(){
          list_switches[listNumber] = false;
        },500);
      };
    }
  });
}



//------------------------menu end------------------------//


/*--------------------product slider--------------------------*/

$(document).ready(function(){
  $('.product_img_slider').slick({
    arrows: true,
    speed: 500,
    dots: true,
    veriableWidth: true,
  })
})

/*---------------------product slider END-------------------------*/

/*----------------------quantity--------------------------------*/ 

var quantity_origin = 0;
$(".quantity_up").on('click',function(){
  var q =  $('#product_quantity').val();
  quantity_origin = q;
  if($('#product_quantity').val() < 101){
    quantity_origin++;
    $('#product_quantity').val(quantity_origin);
  };
});


  $(".quantity_down").on('click',function(){
    var q =  $('#product_quantity').val();
    quantity_origin = q;
    if($('#product_quantity').val() > 0){
      quantity_origin--;
      $('#product_quantity').val(quantity_origin);
     }
});



var quantity_check = () =>{
  if($('#product_quantity').val() <= 0) {
    quantity_origin = 0;
    $('#product_quantity').val(quantity_origin);
  };
};

//-------------------phone menu----------------////
var phone_menu_switch = false;
$('#phone_menu_btn').on('click',function(){
  if(phone_menu_switch == false){
    $('.phone_navlist').css({"padding":"20px","height":"483px"});
    setTimeout(function(){
      phone_menu_switch = true;
      $(".phone_navlist").css('border-color',"#ff9c2b");
    },500)

  }else{
    let list_height_now = $(".phone_navlist").height();
    $(".phone_navlist").css("height","list_height_now");
    $('.phone_navlist').css({"padding":"0px","height":"0px"});
    $('.lists').css("height","0px");
    setTimeout(function(){
      phone_menu_switch = false;
      list_switches = {list01:false,list02:false,list03:false,list04:false,list05:false,list06:false,};
      $(".phone_navlist").css('border-color',"#ffffff");
    },500)
  };
})




$(window).scroll(function(){
  var scrollVal =  $(this).scrollTop();
  $('.lists').css("height","0px");
  if(scrollVal >= 1500 ){
    let list_height_now = $(".phone_navlist").height();
    $(".phone_navlist").css("height","list_height_now");
    $('.phone_navlist').css({"padding":"0px","height":"0px"});

    setTimeout(function(){
      phone_menu_switch = false;
      list_switches = {list01:false,list02:false,list03:false,list04:false,list05:false,list06:false,};
      $(".phone_navlist").css('border-color',"#ffffff");
    },500)

  }
});


//------------------------phone EDN-----------------------------------*/





