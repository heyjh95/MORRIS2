$(function () {
	//sec1
	var mainSwiper = new Swiper(".sec1 .visual", {
		slidesPerView: 1,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		speed: 1000,
		loop: true,
		spaceBetween: 0,
		observer: true,
		observeParents: true,
		touchEventsTarget: "wrapper",
		preventClicks: false,
		preventClicksPropagation: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		on: {
			slideChange: function () {
				var realIndex = this.realIndex;
				$(".sec1 .visual .btns li").removeClass("on").eq(realIndex).addClass("on");
			},
		},
	});

	$(".sec1 .visual .btns").on("click", "li", function (e) {
		if ($(e.target).closest("a").length) {
			return;
		}
		var index = $(this).index();
		mainSwiper.slideToLoop(index);
		$(this).addClass("on").siblings().removeClass("on");
	});

	//sec2
	var prdSwiper = new Swiper(".sec2 .product", {
		slidesPerView: "auto",
		speed: 1000,
		loop: false,
		spaceBetween: 32,
		observer: true,
		observeParents: true,
		autoplay: false,
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
		navigation: {
			nextEl: ".vnext",
			prevEl: ".vprev",
		},
		breakpoints: {
			812: {
				slidesPerView: "auto",
				spaceBetween: 32,
			},
		},
	});

	//sec3
	$(".sec3 .conWrap .btns li").first().addClass("on");
	$(".sec3 .conWrap .conList .con").first().addClass("on");

	$(".sec3 .conWrap .btns li").click(function () {
		const idx = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".sec3 .conWrap .conList .con").removeClass("on").eq(idx).addClass("on");
	});

	//sec4
	function initSec4Swiper() {
		// 기존 Swiper 인스턴스가 있으면 제거
		if (window.sec4Swiper) {
			window.sec4Swiper.destroy(true, true);
		}

		window.sec4Swiper = new Swiper(".sec4Swiper", {
			slidesPerView: "1",
			speed: 1000,
			loop: true,
			spaceBetween: 0,
			observer: true,
			observeParents: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
			},
		});
	}

	//sec4 탭 클릭
	$(document).on("click", ".sec4 .tabs li", function () {
		let idx = $(this).data("idx");
		$(this).addClass("on").siblings().removeClass("on");

		// 로컬 재현용: 원본은 ./_sec4_list.php 에 ajax 요청. 미리 받아 둔 응답(<template>)을 쓴다.
		var response = $("#sec4_tpl_" + idx).html();
		if (response) {
			$(".sec4 .conWrap").html(response);
			setTimeout(function () {
				initSec4Swiper();
			}, 100);
		}
	});

	var pressSwiper = new Swiper(".press", {
		slidesPerView: "auto",
		speed: 1000,
		loop: false,
		spaceBetween: 32,
		observer: true,
		observeParents: true,
		autoplay: false,
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
		navigation: {
			nextEl: ".vnext",
			prevEl: ".vprev",
		},
		breakpoints: {
			812: {
				slidesPerView: "auto",
				spaceBetween: 32,
			},
		},
	});
});
