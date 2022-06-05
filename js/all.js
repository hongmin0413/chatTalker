class Plan {
  constructor(quantity, basicPrice, standardPrice){
    this.quantity = quantity;
    this.basicPrice = basicPrice;
    this.standardPrice = standardPrice;
  }
}

//放不同的方案
var planList = [];

$(document).ready(function () {
  //初始化卡片輪播
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

  //初始化方案費用並放到list
  planList.push(new Plan("10000", 600, 1600));
  planList.push(new Plan("15000", 500, 1500));
  planList.push(new Plan("20000", 400, 1400));
  planList.push(new Plan("25000", 300, 1300));
  planList.push(new Plan(">25000", 200, 1200));
})

//換用戶數及相應費用
function changePlan(object) {
  //更換資料
  var plan = planList[$(object).parent().index()];
  $(".peopleQuantity").html(plan.quantity+"<sub>位</sub>");
  $(".planModeList li:nth-child(1) .price").html(plan.basicPrice+"<sub>TWD</sub>");
  $(".planModeList li:nth-child(2) .price").html(plan.standardPrice+"<sub>TWD</sub>");

  //更換按鈕樣式(移除現有的、點選的加active)
  $(".planBtnList").find(".planBtn-active").removeClass("planBtn-active");
  $(object).addClass("planBtn-active");
}

//常見問題的slide
function slideToggle(object) {
  //其他向上、換回加號、questionWord換回顏色
  $(object).siblings().find(".answer").slideUp(500);
  $(object).siblings().find(".subColor").siblings().toggleClass("d-none");
  $(object).siblings().find(".subColor").removeClass("subColor");

  //點選的向下、換成減號、questionWord換色
  $(object).find(".answer").slideToggle(500);
  $(object).find("img").toggleClass("d-none");
  $(object).find(".questionWord").toggleClass("subColor");
}

//返回最上面
function moveTop() {
  $("html, body").scrollTop(0, 2000);
}