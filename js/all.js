$(document).ready(function () {
  //卡片輪播
  $('.feedbackList').slick({
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})

//type: [index, basicPrice, standardPrice]
const plan = {"1": ["10000", "600", "1600"],
              "2": ["15000", "500", "1500"],
              "3": ["20000", "400", "1400"],
              "4": ["25000", "300", "1300"],
              "5": [">25000", "200", "1200"]};

//換用戶數及相應費用
function changePlan(object) {
  var index = $(object).parent().index()+1;

  //更換資料
  var resultList = plan[index];
  $(".peopleQuantity").html(resultList[0]+"<sub>位</sub>");
  for(var i = 1; i < resultList.length; i++)
    $(".planModeList li:nth-child("+i+") .price").html(resultList[i]+"<sub>TWD</sub>");

  //更換按鈕樣式(移除現有的、點選的加active)
  $(".planBtnList").find(".planBtn-active").removeClass("planBtn-active");
  $(".planBtnList li:nth-child("+index+") .planBtn").addClass("planBtn-active");
}

//常見問題的slide
function slideToggle(object) {
  //其他向上、換回加號、question換回顏色
  $(object).siblings().find(".answer").slideUp(500);
  $(object).siblings().find(".subColor").siblings().toggleClass("d-none");
  $(object).siblings().find(".subColor").removeClass("subColor");

  //點選的向下、換成減號、question換色
  $(object).find(".answer").slideToggle(500);
  $(object).find("img").toggleClass("d-none");
  $(object).find(".questionWord").toggleClass("subColor");
}

//返回最上面
function moveTop() {
  $("html, body").scrollTop(0, 2000);
}