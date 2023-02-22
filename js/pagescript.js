//fullpage
// $(function(){
//   $('#fullpage').fullpage({
//     //options here
//     navigation:true,
//     navigationPosition:'right',
// 		navigationTooltips:['Main', 'Quick-Menu', 'Start – Up Event', '원스톱 창업상담'],
// 		showActiveTooltip:true,
// 		sectionsColor: ['ffffff', 'ffffff', '#ffffff', 'ffffff'],
//   });
// });
//sec2 탭메뉴
$(document).ready(function(){
	$('#sec2 ul.tab li a').on('click', function (e) {
		e.preventDefault();
		var index = $('#sec2 ul.tab li a').index(this);
		$('#sec2 ul.tab li, #sec2 div.tab_contents').removeClass('active');
		$('#sec2 ul.tab li:eq('+ index +'), #sec2 div.tab_contents:eq('+ index +')').addClass('active');
	});
});
		//배너슬라이드
		$(document).ready(function(){
			$('.banner_list').slick({
				infinite: true, //양방향 무한 모션
				autoplay:true,//자동롤링
				//centerMode:true,//가운데모드
				//centerPadding:'10%',//객체간 간격
				slidesToShow:4,//한번에 보여질개수
				//variableWidth:true,//가변 너비 슬라이드
				cssEase:'cubic-bezier(0.77, 0, 0.175, 1)',//이징 속도(좌:가로,세로, 우:가로,세로)
				speed: 400,//슬라이드 전화시 속도
				nextArrow: $(".banner_controll_box .banner_next"),
				prevArrow: $(".banner_controll_box .banner_prev"),
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