$(function () {
	let currentNav = -1; // 현재 열려 있는 메뉴 인덱스

	$(".pcNav>ul>li").on("mouseenter", function () {
		const navNum = $(this).index();

		// 같은 메뉴에 다시 들어오면 slideDown/fade 모두 건너뜀 (깜빡임 방지)
		if (navNum === currentNav) return;

		$("#header").addClass("on");

		if (currentNav === -1) {
			// 처음 열릴 때만 slideDown
			$(".subMenu").stop(true, false).slideDown(200);
		}

		$(".subMenu .menuwrap").stop(true, true).hide();
		$(".subMenu .menuwrap").eq(navNum).stop(true, true).fadeIn(200);
		currentNav = navNum;

		let vh = $(".subMenu .menuwrap").eq(navNum).innerHeight();
		$(".subMenu .subMenuBg").css("height", vh + "px");
	});

	$("#header").on("mouseleave", function () {
		$("#header").removeClass("on");
		currentNav = -1; // 메뉴가 닫히므로 초기화
		$(".subMenu")
			.stop(true, false)
			.slideUp(200, function () {
				$(".subMenu .menuwrap").stop(true, true).hide();
			});
	});

	$(window).scroll(function () {
		var winH = $(window).scrollTop();
		if (winH > 50) {
			$("#header").addClass("scroll");
		} else {
			$("#header").removeClass("scroll");
		}
	});
	$(window).trigger("scroll");

	$(".btnMenu").click(function () {
		$(".allmenu").fadeToggle(600);
		$(".allmenu").toggleClass("open");
		$(".btnMenu").toggleClass("open");
		$("#header").toggleClass("open");
	});

	var $depth1 = $(".allmenu .inner .left .allmenuwrap > ul > li > a");
	var $allmenuSub = $(".allmenu .inner .left .allmenuwrap > ul > li > ul");

	$depth1.on("click", function () {
		if ($(window).width() <= 940) {
			var $li = $(this).closest("li");
			var $sub = $li.children("ul");

			if (!$li.hasClass("active")) {
				$(".allmenuwrap > ul > li").removeClass("active");
				$(".allmenuwrap > ul > li > ul").stop().slideUp(300);
				$(".allmenuwrap > ul > li > .menu-title a").removeClass("on");

				$li.addClass("active");
				$(this).addClass("on");
				$sub.stop().slideDown(300);
			} else {
				$li.removeClass("active");
				$(this).removeClass("on");
				$sub.stop().slideUp(300);
			}
		}
	});

	$(window).on("resize", function () {
		if ($(window).width() > 940) {
			$(".allmenuwrap > ul > li").removeClass("active");
			$depth1.removeClass("on");
			// slideUp/Down 인라인 style(display:block/none 등) 제거 후 PC용 flex 적용
			$allmenuSub.stop(true, true).removeAttr("style").css("display", "flex");
		}
	});

	//TOP 버튼
	function topScroll() {
		$(".top_btn").click(function () {
			$("body,html").animate({ scrollTop: 0 }, 300);
		});
	}

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 30) {
			$(".top_btn").fadeIn(200);
		} else {
			$(".top_btn").fadeOut(200);
		}
		checkOffset();
	});

	function checkOffset() {
		var a = $(document).height() - $(window).height();
		var b = $("#footer").outerHeight();
		scroll = $(window).scrollTop();

		if (scroll > a - b) {
			$(".top_btn")
				.css("position", "absolute")
				.css("bottom", b + 20);
		} else {
			$(".top_btn").css("position", "fixed").css("bottom", "20px");
		}
	}

	topScroll();
	checkOffset();

	//헤더 랭귀지버튼
	$(".head .gnb .lang > a").click(function () {
		$(".head .gnb .lang > ul").slideToggle();
	});
});
