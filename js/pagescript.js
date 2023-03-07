
//sec2 탭메뉴
$(document).ready(function(){
	$('#sec2 ul.tab li a').on('click', function (e) {
		e.preventDefault();
		var index = $('#sec2 ul.tab li a').index(this);
		$('#sec2 ul.tab li, #sec2 div.tab_contents').removeClass('active');
		$('#sec2 ul.tab li:eq('+ index +'), #sec2 div.tab_contents:eq('+ index +')').addClass('active');
	});
});
//모바일 슬라이드
$(document).ready(function(){//시작
	$('.visual').slick({
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToScroll: 1,
		focusOnSelect: true,
	});
	});//끝
	$(document).ready(function(){//시작
		$('.mNews').slick({
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToScroll: 1,
			focusOnSelect: true
		});
		});//끝
		$(document).ready(function(){//시작
			$('.eventBox').slick({
				infinite: true, 
				slidesToShow: 4,
				autoplay: true,
				autoplaySpeed: 4000,
				slidesToScroll: 1,
				focusOnSelect: true,
				nextArrow: $(".event_controll_box .event_next"),
				prevArrow: $(".event_controll_box .event_prev"),
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
						}
					}
				]
			});
			$('.event_play').hide();
			$('.event_pause').on('click', function() {
				$('.eventBox').slick('slickPause');
				$(this).hide();
				$('.event_play').show();
			});
			$('.event_play').on('click', function() {
				$('.eventBox').slick('slickPlay');
				$(this).hide();
				$('.event_pause').show();
			});
			});//끝
			$(document).ready(function(){//시작
				var swiper = new Swiper(".mySwiper", {
					slidesPerView: "auto",
					centeredSlides: true,
					spaceBetween: 20,
				});
				});//끝
				$(document).ready(function(){//시작
					var swiper = new Swiper(".mySwiper1", {
						slidesPerView: "auto",
						centeredSlides: true,
						freeMode: true,
						spaceBetween: 20,
						scrollbar: {
							el: ".swiper-scrollbar",
							hide: true,
						},
					});
					});//끝			
		//배너슬라이드
		$(document).ready(function(){
			$('.banner_list').slick({
				infinite: true, //양방향 무한 모션
				autoplay:true,//자동롤링
				//centerMode:true,//가운데모드
				//centerPadding:'10%',//객체간 간격
				slidesToScroll: 1,
				focusOnSelect: true,
				slidesToShow:4,//한번에 보여질개수
				//variableWidth:true,//가변 너비 슬라이드
				cssEase:'cubic-bezier(0.77, 0, 0.175, 1)',//이징 속도(좌:가로,세로, 우:가로,세로)
				speed: 400,//슬라이드 전화시 속도
				nextArrow: $(".banner_controll_box .banner_next"),
        prevArrow: $(".banner_controll_box .banner_prev"),
          responsive:[//반응형 일때 실행
            {
              breakpoint:1199,
              settings:{
                slidesToShow:4,//한번에 보여질개수
              }
            },
            {
              breakpoint:1024,
              settings:{
                slidesToShow:3,//한번에 보여질개수
              }
            },
            {
              breakpoint:768,
              settings:{
                slidesToShow:2,//한번에 보여질개수
              }
            },
            {
              breakpoint:520,
              settings:{
                slidesToShow:1,//한번에 보여질개수
              }
            }
          ]
			});
			$('.banner_play').hide();
			$('.banner_pause').on('click', function() {
				$('.banner_list').slick('slickPause');
				$(this).hide();
				$('.banner_play').show();
			});
			$('.banner_play').on('click', function() {
				$('.banner_list').slick('slickPlay');
				$(this).hide();
				$('.banner_pause').show();
			});
		});