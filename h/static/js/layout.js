$(function(){
	funSense(); //person sense
	funNum(); //index reduce or add
	funCart(); //cart
	funMenu(); //menu
});

//fast click js
window.addEventListener('load', function () {
	FastClick.attach(document.body);
}, false);

//person sense
function funSense() {
	var strLength;
	if ($("div").hasClass("list")) {
		strLength = $(".list li").length;
		$(".list ul").width(strLength*72);
	}
}

//index reduce or add
function funNum() {
	var strNum = 0;
	//add
	$(document).on("click",".add",function(){
		var $this = $(this);
		strNum = $this.siblings(".num-con").text();
		strNum++;
		$this.siblings(".num-con").text(strNum);
		$this.siblings(".num-con,.reduce").show();
	});
	//reduce
	$(document).on("click",".reduce",function(){
		var $this = $(this);
		strNum = $this.siblings(".num-con").text();
		if (strNum > 0) {
			strNum--;
			$this.siblings(".num-con").text(strNum);
			if (strNum == 0) {
				$this.hide();
				$this.siblings(".num-con").hide();
			}
		}
	});
}

//cart
function funCart() {
	$(document).on("click",".bar .total",function(){
		if ($(".cart").is(":hidden")) {
			$(".cart, .mask").show();
			$(".bar .iconfont").addClass("icon-arrow-down-fine").removeClass("icon-arrow-up-fine");
		} else {
			$(".cart, .mask").hide();
			$(".bar .iconfont").addClass("icon-arrow-up-fine").removeClass("icon-arrow-down-fine");
		}
	});
	$(document).on("focus",".bar .text input",function(){
		$(".cart, .mask").hide();
		$(".bar .iconfont").addClass("icon-arrow-up-fine").removeClass("icon-arrow-down-fine");
	});
}

//menu
function funMenu() {
	$(document).on("click",".menu a",function(){
		$(this).addClass("currect").siblings().removeClass("currect");
	});
}