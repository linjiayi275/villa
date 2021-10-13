$(document).ready(()=>{
  // nav 區塊
  // phone 選單 toggle
  $('.nav_middle').on('click',function(){
    $('.nav_right').removeClass('nav_hide')
    $('.nav_right').addClass('nav_show')
  })
  // phone 選單點擊選項後收起選單，但網頁版選單也會不見
  $('.nav_right').on('click','li',function(e){
    $('.nav_right').removeClass('nav_show')
    $('.nav_right').addClass('nav_hide')
  })

  // 房型介紹區塊
  // typeBtn 改變 typeDetail 內容
  $('.typeBtn').on('click','li',function(e){
    let target = $( e.target );
    console.log(target);
    $('.typeDetail>li').removeClass('show')
    if(target.attr('data-name') == 'room1'){
      $('.room1').addClass('show')
    }else if(target.attr('data-name') == 'room2'){
      $('.room2').addClass('show')
    }else if(target.attr('data-name') == 'room3'){
      $('.room3').addClass('show')
    }else if(target.attr('data-name') == 'room4'){
      $('.room4').addClass('show')
    }else if(target.attr('data-name') == 'room5'){
      $('.room5').addClass('show')
    }
  })
  // typeBtn 點選後樣式改變
  $('.typeBtn').on('click','li',function(e){
    $('.typeBtn>li').removeClass('typeClick');
    $(e.target).addClass('typeClick');
  })

  // 線上訂房區塊
  // bookbtn 點選後跳出 alert_bookCheck 視窗
  $('.bookbtn').on('click',function (e){
    $('.false').remove() //資料未填寫完整
    $('.alert_bookCheck').addClass('show')
  })

  // alert_bookCheck 視窗點選返回 關閉 alert_bookCheck
  $('.backbtn').on('click',function (e){
    $('.alert_bookCheck').removeClass('show')
  })
  // 資料未填寫完整 
  $('form').submit(function(e){
    $('.false').remove()
    if(
      $('input:text').val() == '' ||
      $('.orderTel').val() == '' ||
      $('.orderEmail').val() == '' ||
      $('input:radio[name="pay"]:checked').val() == null
      ){
      $('.alert_bookCheck').append("<p class='false'><strong>資料未填寫完整!</strong></p>")
      e.preventDefault();
    }
    return;
  })

  // 取得房型
  $('#roomtype').change(function(){
    $('#roomtype').attr('value',$(this).val())//賦予value給#roomtype
    $(".roomtypeval").text($("#roomtype").val())
  })
  // 取得入住日期
  $('#startDate').change(function(){
    $('#startDate').attr('value',$(this).val())//賦予value給#startDate
    $(".roomcheckin").text($("#startDate").val())
  })
  // 取得退房日期
  $('#CheckoutDate').change(function(){
    $('#CheckoutDate').attr('value',$(this).val())//賦予value給#CheckoutDate
    $(".roomcheckout").text($("#CheckoutDate").val())
  })

  // rightimg -> slider 點radiobtn移動至對應圖片
  $('.radiobtn').on('click','input',function (e){
    let target = $(e.target)
    $('.bookimg').removeClass('ml-1 ml-2 ml-3 ml-4 ml-5')
    if(target.attr('class') == 'radio1'){
      $('.bookimg').addClass('ml-1')
    }else if(target.attr('class') == 'radio2'){
      $('.bookimg').addClass('ml-2')
    }else if(target.attr('class') == 'radio3'){
      $('.bookimg').addClass('ml-3')
    }else if(target.attr('class') == 'radio4'){
      $('.bookimg').addClass('ml-4')
    }else if(target.attr('class') == 'radio5'){
      $('.bookimg').addClass('ml-5')
    }
  })
  // 1秒鐘後先選取radio1,讓radio1的radio底變成白色
  setTimeout(function(){
    $('.radio1').click()
    $('.room1btn').click()
  },1000)
  // 每6秒 自動播放圖片
  let counter =1;
  setInterval(function(){
    $('.bookimg').removeClass('ml-1 ml-2 ml-3 ml-4 ml-5')//先移除bookimg的margin-left之class
    $('.bookimg').addClass(`ml-${counter}`)
    $(`.radio${counter}`).click()
    counter++;
    if(counter > 5){
      counter = 1;
    }
  },6000)

})