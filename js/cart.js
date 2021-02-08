//---------------------------commodity price format---------------------------*/

$(document).ready(function(){





  input_id()
  unit(unit_price);
 
   
  totally_price();




   
});



var allPrice = 0;

var unit_price = [];
function unit(unit_price){
  

  var cNumber = -1;
  $('.my_commodity_price').attr("id","")
  $('.my_commodity_price').each(function(){
    cNumber ++;
    var idName = "c"+cNumber;

    $(this).attr("id",idName);
    

    unit_price.push($(this).text());

  

    var priceToNumber = Number($(this).text());    
    allPrice += priceToNumber


   

    var fomatter =  new Intl.NumberFormat('zn-TW', {
        options: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0,
      }).format($(this).text());
      
      $(this).text(fomatter);

      

    });

    return unit_price;

}



function input_id(){
  var iNumber = -1;
  $(".quantity_btn_cart_container input").each(function(){
    iNumber ++;
    var inputId = "I"+iNumber;
    $(this).attr("id",inputId);
  })

}


function totally_price(){

  var totally_price =  new Intl.NumberFormat('zn-TW', {
    options: 'currency',
    currency: 'TWD',
    currencyDisplay: 'name',
    minimumFractionDigits: 0,
  }).format(allPrice);
  $("#totally_price_show").text(" "+ "新台幣"+totally_price);

}



/*將每個按鈕迴圈設定一個專屬的ID編號用編號取得按下的按鈕順序，加入刪除按鈕後要記得重新編號*/




/*----------------------quantity  cart--------------------------------*/ 




$(".quantity_up_cart").on('click',function(){
  var c = $(this).parent().parent().find('input').val();
  quantity_origin = c;
  let $price = $(".my_commodity_price");
  var now_commodity_id = $(this).parent().parent().parent().find($price).attr('id').slice(1);
  if(c < 100){
    quantity_origin++;
    $(this).parent().parent().find('input').val(quantity_origin);
    let price = unit_price[now_commodity_id];
    let price2 = parseInt(price);
    let total = quantity_origin*price2;
    
    


    

    var total_price = new Intl.NumberFormat('zn-TW',{
      options: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
    }).format(total);

    $(this).parent().parent().parent().find($price).text(total_price);

    commodity_totally_price();
   



   

  
  };
});


$(".quantity_down_cart").on('click',function(){
  var c = $(this).parent().parent().find('input').val();
  quantity_origin = c;
  let $price = $(".my_commodity_price");
  var now_commodity_id = $(this).parent().parent().parent().find($price).attr('id').slice(1);
  if(c > 0){
    quantity_origin--;
    $(this).parent().parent().find('input').val(quantity_origin);
    let price = unit_price[now_commodity_id];
    let price2 = parseInt(price);
    let total = quantity_origin*price2;


    var total_price = new Intl.NumberFormat('zn-TW',{
      options: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
    }).format(total);

    $(this).parent().parent().parent().find($price).text(total_price);

    commodity_totally_price();





   }
});


function price_change(val){
  let input_price = "#" +  val;
  let price_show_id = "#" + "c"  + val.slice(1)
  let price = unit_price[val.slice(1)];
  let price2 = parseInt(price);
  let quantity_now = $(input_price).val();
  



  if(quantity_now > 100) {
    quantity_now = 100;
    $(input_price).val(quantity_now);
  }



  let total = quantity_now * price2;
  
  

  

  var total_price = new Intl.NumberFormat('zn-TW',{
    options: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  }).format(total);


  $(price_show_id).text(total_price);

  commodity_totally_price();
 


}



var commodity_totally_price = () =>{
  allPrice = 0;

  $('.my_commodity_price').each(function(){

    var priceToNumber = Number($(this).text().replace(",",""));
    
    allPrice += priceToNumber
    
    var price_fomat = $(this).text().replace(",","");


    var fomatter =  new Intl.NumberFormat('zn-TW', {
        options: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0,
      }).format(price_fomat);
      $(this).text(fomatter);

  });



  totally_price();



}



$(".my_commodity_delet").on("click",function(){
  $(this).parent().remove();
  $(".quantity_btn_cart_container input").attr("id","");
  input_id();
  delete_totalPrice_count();


});




var delete_totalPrice_count = () =>{
  var d = -1;
 

  var allPrice = 0;
  
  $('.my_commodity_price').each(function(){
    d++;
    var unit_price = Number($(this).text().replace(",",""));
    var pNumber = "c" + d;
    $(this).attr("id","");
    $(this).attr("id",pNumber);
    allPrice += unit_price;
  });

  var total_format = new Intl.NumberFormat('zn-TW',{
    options: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  }).format(allPrice);
  
  $("#totally_price_show").text(" 新台幣" + total_format);
};


