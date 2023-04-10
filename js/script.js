
 //메뉴 슬라이드 다운
$(function(){
  var depth1 = $(".gnb > li"),
      header = $("header");
      depth1.mouseenter(function(){
      header.stop().animate({height:"680px"}) ; 
      }).mouseleave(function(){
        header.stop().animate({height:"195px"});
      })
});
//menubar
$(document).ready(function(){
	$(".open1").click(function(){
		$(".leftWrap").animate({"right":"0"},500,"swing");});
	$(".close1").click(function(){
		$(".leftWrap").animate({"right" : "-100%"}, 500);
	});
	});
//mMenubar
$(document).ready(function(){
		$(".open2").click(function(){
			$(".mobileWrap").animate({"right":"0"},500,"swing");});
		$(".close2").click(function(){
			$(".mobileWrap").animate({"right" : "-100%"}, 500);
		});
		});
//모바일메뉴왼쪽메뉴 펼치기
$(document).ready(function(){//시작
			$('.mobileWrap li.has-sub > button').on('click', function(){
				//$(this).removeAttr('href');
				var element = $(this).parent('li');
				if (element.hasClass('open')) {
					element.removeClass('open');
					element.find('li').removeClass('open');
					element.find('ul').slideUp('fast');
				}
				else {
					element.addClass('open');
					element.children('ul').slideDown('fast');
					// element.siblings('li').children('ul').slideUp('fast');
					element.siblings('li').removeClass('open');
					element.siblings('li').find('li').removeClass('open');
					// element.siblings('li').find('ul').slideUp('fast');
				}
				return false;
			});
			});//끝
/* 모바일 서브메뉴 */
$(document).ready(function(){
	$('#mb_lnb li button').click(function(){
		$('#mb_lnb li button').removeClass('on');
		$('#mb_lnb li ul').slideUp('fast');
		if($('+ul',this).is(':hidden')){
			$(this).addClass('on').next().slideDown('fast');
		}else{
			$(this).removeClass('on').next().slideUp('fast');
		}
		return false;
	});
	$('*:not("#mb_lnb li button")').click(function(){
		$('#mb_lnb li button').removeClass('on');
		$('#mb_lnb li ul').slideUp('fast');
	});
	});
	//교원탭
	$(document).ready(function(){
		$('div.t_board ul.tab li a').on('click', function (e) {
			e.preventDefault();
			var index = $('div.t_board ul.tab li a').index(this);
			$('div.t_board ul.tab li, div.t_board div.tab_contents').removeClass('active');
			$('div.t_board ul.tab li:eq('+ index +'), div.t_board div.tab_contents:eq('+ index +')').addClass('active');
	  });
	});
	//실험실지원탭
	$(document).ready(function(){
		$('div.t_board2 ul.tab li a').on('click', function (e) {
			e.preventDefault();
			var index = $('div.t_board2 ul.tab li a').index(this);
			$('div.t_board2 ul.tab li, div.t_board2 div.tab_contents').removeClass('active');
			$('div.t_board2 ul.tab li:eq('+ index +'), div.t_board2 div.tab_contents:eq('+ index +')').addClass('active');
	  });
	});
	//창업강좌 토글
	$(document).ready(function(){//시작
    $(".togbtn1").click(function(){
     
      $(".display1").toggle();
    });
		$(".togbtn2").click(function(){
     
      $(".display2").toggle();
    });
    });//끝
		
		
			//창업강좌 토글
	$(document).ready(function(){//시작
    $(".toggle-btn").click(function(){
     
      $(".hide").toggle();
    });
    });//끝

		$(document).ready(function(){//시작
			$(function() {

				var s1 = $('#slider').sliderRotate({displayItems:5});
				var s2 = $('#slider-2').sliderRotate({ autoSlide:true});
			
			});
			
			//-------------------------------------------
			//based on : https://www.jqueryscript.net/demo/Basic-3D-Image-Rotator-with-jQuery-CSS3-rotateSlider/
			// plugin template by https://jqueryboilerplate.com/
			;
			(function($, window, document, undefined) {
			
				"use strict";
			
				var pluginName = "sliderRotate",
					dataKey = "plugin_" + pluginName;
			
				var SliderRotate = function(element, options) {
			
					this.plugin_element = $(element);
					this.itemClass;
					this.arrowClass;
					this.$item;
					this.$arrow;
					this.$sliderContainer;
					this.numItens;
					this.indexActive;
					this.displayItens;
					this.autoSlide;
					this.slider_timer;
					this.time;
			
					this.PREV_CLASS = "slider-rotate__item--prev";
					this.PREV2_CLASS = "slider-rotate__item--prev-2";
					this.NEXT_CLASS = "slider-rotate__item--next";
					this.NEXT2_CLASS = "slider-rotate__item--next-2";
					this.ACTIVE_CLASS = "slider-rotate__item--active";
			
					this.CLASS_DISPLAY_3 = "slider-rotate--3";
					this.CLASS_DISPLAY_5 = "slider-rotate--5";
			
					this.DISPLAY_3 = 3;
					this.DISPLAY_5 = 5;
			
					this.SLIDER_CONTAINER = "slider-rotate__container";
			
					this.options = {
						time: 4,
						autoSlide: true,
						displayItems: 5,
						activate: function() {}
					};
			
					this.init(options);
			
				};
			
				SliderRotate.prototype = {
					init: function(options) {
			
						_init(options, this);
			
					},
					destroy: function() {
						this.plugin_element.unbind().removeData();
						$('*', this.plugin_element).unbind().removeData();
						this.$sliderContainer.unbind('mouseenter.slider');
						this.$sliderContainer.unbind('mouseleave.slider');
						_pauseSlide(this); //remove timer
					}
				};
			
				function _init(__options__, __this__) {
			
					//---------------------------------
					//---------------------------------
					var opts = __this__.options;
					$.extend(opts, __options__);
					opts.activate.call(__this__);
					//---------------------------------
					//---------------------------------
					__this__.displayItens = (opts.displayItems == 3 || opts.displayItems == 5) ? opts.displayItems : __this__.DISPLAY_3;
					__this__.itemClass = opts.itemClass || 'slider-rotate__item';
					__this__.arrowClass = opts.arrowClass || 'js-slider-rotate-arrow';
					__this__.$item = __this__.plugin_element.find('.' + __this__.itemClass);
					__this__.$arrow = __this__.plugin_element.find('.' + __this__.arrowClass);
					__this__.numItens = __this__.$item.length;
					__this__.indexActive = 0;
					__this__.$sliderContainer = $("." + __this__.SLIDER_CONTAINER);
					__this__.autoSlide = opts.autoSlide;
					__this__.time = opts.time;
			
					//add class to change layout by 3 or 5 itens
					__this__.plugin_element.addClass((__this__.displayItens == __this__.DISPLAY_3) ? __this__.CLASS_DISPLAY_3 : __this__.CLASS_DISPLAY_5);
			
					//start items positions
					_moveSlide(__this__.indexActive, __this__);
			
					//show container to prevent layout issues
					setTimeout(function() {
						__this__.$sliderContainer.css("visibility", "visible");
					}, 400);
			
					//item mouse event
					__this__.$item.on('click.rotate', function() {
			
						//prevent click on active item
						if ($(this).hasClass(__this__.ACTIVE_CLASS)) return false;
			
						//move slide to the desired index
						_moveSlide($(this).index(), __this__);
			
						return false;
					});
			
					//arrow mouse event
					__this__.$arrow.on('click.rotate', function() {
			
						//action (prev or next)
						var _action = $(this).data('action');
			
						if (_action == 'next') {
			
							//move slide
							_moveNext(__this__);
			
						} else if (_action == 'prev') {
			
							//move slide
							_movePrev(__this__);
			
						}
			
					});
			
					if (__this__.autoSlide) {
						_autoSlide(__this__);
					}
				}
			
				//auto slide
				function _autoSlide(__this__) {
					_pauseSlide(__this__); //	remove timer
			
					var _miliseconds = Number(__this__.time) * 1000; //	converts to miliseconds
					__this__.slider_timer = setTimeout(function() {
						_moveNext(__this__);
					}, _miliseconds);
			
					//stop items from auto slide
					__this__.$sliderContainer.unbind('mouseenter.slider').on('mouseenter.slider', function() {
						_pauseSlide(__this__); //remove timer
					});
			
					//back to auto slide
					__this__.$sliderContainer.unbind('mouseleave.slider').on('mouseleave.slider', function() {
						_autoSlide(__this__);
					});
			
				}
			
				//--------------
				//pause slide
				function _pauseSlide(__this__) {
					clearTimeout(__this__.slider_timer);
				}
			
				//move slide to the next item
				function _moveNext(__this__) {
			
					var _index = (__this__.indexActive == __this__.numItens - 1) ? 0 : (__this__.indexActive + 1);
			
					_moveSlide(_index, __this__);
			
				}
			
				//move slide to the previous item
				function _movePrev(__this__) {
			
					var _index = (__this__.indexActive == 0) ? (__this__.numItens - 1) : (__this__.indexActive - 1);
			
					_moveSlide(_index, __this__);
			
				}
			
				function _moveSlide(__index__, __this__) {
			
					__this__.indexActive = __index__;
			
					// removing all classes
					__this__.plugin_element.find('.' + __this__.ACTIVE_CLASS).removeClass(__this__.ACTIVE_CLASS);
					__this__.plugin_element.find('.' + __this__.NEXT_CLASS).removeClass(__this__.NEXT_CLASS);
					__this__.plugin_element.find('.' + __this__.PREV_CLASS).removeClass(__this__.PREV_CLASS);
					__this__.plugin_element.find('.' + __this__.PREV2_CLASS).removeClass(__this__.PREV2_CLASS);
					__this__.plugin_element.find('.' + __this__.NEXT2_CLASS).removeClass(__this__.NEXT2_CLASS);
			
					//if active index is the last item
					if (__index__ == __this__.numItens - 1) {
			
						__this__.$item.eq(0).addClass(__this__.NEXT_CLASS);
			
						if (__this__.displayItens == __this__.DISPLAY_5) {
							__this__.$item.eq(1).addClass(__this__.NEXT2_CLASS);
						}
			
					}
			
					//if active index is the first item
					if (__index__ == 0) {
			
						__this__.$item.eq(__this__.numItens - 1).addClass(__this__.PREV_CLASS);
			
						if (__this__.displayItens == __this__.DISPLAY_5) {
							__this__.$item.eq(__this__.numItens - 2).addClass(__this__.PREV2_CLASS);
						}
			
					}
			
					// loop through all items
					__this__.$item.each(function(index) {
			
						if (index == __index__) {
			
							__this__.$item.eq(index).addClass(__this__.ACTIVE_CLASS);
			
						}
			
						if (index == __index__ + 1) {
			
							__this__.$item.eq(index).addClass(__this__.NEXT_CLASS);
			
						}
			
						if (index == __index__ - 1) {
			
							__this__.$item.eq(index).addClass(__this__.PREV_CLASS);
			
						}
			
						//just addClass if display 5 items
						if (__this__.displayItens == __this__.DISPLAY_5) {
			
							if (index == __index__ + 2) {
			
								__this__.$item.eq(index).addClass(__this__.NEXT2_CLASS);
			
							}
			
							if (__index__ == (__this__.numItens - 2)) {
								__this__.$item.eq(0).addClass(__this__.NEXT2_CLASS);
							}
			
							if ((__index__ - 2) == -1) {
								__this__.$item.eq(__this__.numItens - 1).addClass(__this__.PREV2_CLASS);
							}
			
							if (index == __index__ - 2) {
								__this__.$item.eq(index).addClass(__this__.PREV2_CLASS);
							}
			
						}
			
						if (__this__.autoSlide) {
							_autoSlide(__this__);
						}
			
					});
			
				}
			
				//----------------------------------------------------
				//----------------------------------------------------
				//----------------------------------------------------
				//----------------------------------------------------
				$.fn[pluginName] = function(options) {
			
					var plugin = this.data(dataKey);
			
					if (plugin instanceof SliderRotate) {
						if (typeof options !== 'undefined') {
							plugin.init(options);
						}
					} else {
						plugin = new SliderRotate(this, options);
						this.data(dataKey, plugin);
					}
			
					return plugin;
				};
			
			}(jQuery, window, document));
				
			});//끝
		//실시간검색어창
		$(document).ready(function(){//시작
			function view(arg){
				$(".time1, .time2, .time3, .time4,.time5, .time6, .time7, .time8").css("display","none");
				if(arg=="0") {
					$(".time1").css("display","block");
					viewcount = 1;
				}
				else if(arg=="1") {
					$(".time2").css("display","block");
					viewcount = 2;
				}
				else if(arg=="2") {
					$(".time3").css("display","block");
					viewcount = 3;
				}
				else if(arg=="3") {
					$(".time4").css("display","block");
					viewcount = 4;
				}
				else if(arg=="4") {
					$(".time5").css("display","block");
					viewcount = 5;
				}
				else if(arg=="5") {
					$(".time6").css("display","block");
					viewcount = 6;
				}
				else if(arg=="6") {
					$(".time7").css("display","block");
					viewcount = 7;
				}
				else if(arg=="7") {
					$(".time8").css("display","block");
					viewcount = 0;
				}
			}
			var viewcount = 0;
			var rtcarousel = setInterval(function(){ view(viewcount) },3000);
			
			// $("#best_search").mouseenter(function() {
			// 	clearInterval(rtcarousel);
			// });
			
			// $("#best_search").mouseleave(function() {
			// 	rtcarousel = setInterval(function(){ view(viewcount) },3000);
			// });
		});//끝	
		$(document).ready(function(){//시작
			$("#best_search").mouseenter(function() {
				$("#best_search_show").css("display","block");
			});
			$("#best_search").mouseleave(function() {
				$("#best_search_show").css("display","none");
			});
			$("#best_search_show").mouseenter(function() {
				$("#best_search_show").css("display","block");
			});
			$("#best_search_show").mouseleave(function() {
				$("#best_search_show").css("display","none");
			});
			
			});
	//-수강신청 클릭 시 팝업창 
	$(function(){
		$("#modal-open01").click(function(){   $("#popup01").css('display','flex').hide().fadeIn();
		});
		$("#close01, #close02").click(function(){
				modalClose();
		});
		function modalClose(){
			$("#popup01").fadeOut();
		}  
													
	});  
	$(document).ready(function(){//시작
		$('.id_btn1').click(function(){
		if($(this).hasClass('popactive')){
		$('.id_btn1').removeClass('popactive');
	} else {
			$('.id_btn1').removeClass('popactive');
			$(this).addClass('popactive');
			}
			});
		$('.id_btn2').click(function(){
			if($(this).hasClass('popactive')){
			$('.id_btn2').removeClass('popactive');
	} else {
				$('.id_btn2').removeClass('popactive');
				$(this).addClass('popactive');
				}
				});
		$('.id_btn3').click(function(){
			if($(this).hasClass('popactive')){
			$('.id_btn3').removeClass('popactive');
		} else {
				$('.id_btn3').removeClass('popactive');
				$(this).addClass('popactive');
				}
				});
			$('.id_btn4').click(function(){
				if($(this).hasClass('popactive')){
				$('.id_btn4').removeClass('popactive');
		} else {
					$('.id_btn4').removeClass('popactive');
					$(this).addClass('popactive');
					}
					});
			$('.id_btn5').click(function(){
				if($(this).hasClass('popactive')){
				$('.id_btn5').removeClass('popactive');
			} else {
					$('.id_btn5').removeClass('popactive');
					$(this).addClass('popactive');
					}
					});
				$('.id_btn6').click(function(){
					if($(this).hasClass('popactive')){
					$('.id_btn6').removeClass('popactive');
			} else {
						$('.id_btn6').removeClass('popactive');
						$(this).addClass('popactive');
						}
						});
	});//끝 
//-게시판 비밀번호 팝업창 
$(function(){
	$("#modal-pw01, #modal-pw02, #modal-pw03, #modal-pw04, #modal-pw05, #modal-pw06, #modal-pw07, #modal-pw08, #modal-pw09, #modal-pw10, #modal-pw11").click(function(){   $("#popup02").css('display','flex').hide().fadeIn();
	});
	$("#close03, #close04").click(function(){
			modalClose();
	});
	function modalClose(){
		$("#popup02").fadeOut();
	}  								
}); 
//상담방법 왼쪽메뉴 펼치기
$(document).ready(function(){//시작
	$('.menuWrap1 li.has-sub1 > button').on('click', function(){
		//$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp('fast');
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown('fast');
			// element.siblings('li').children('ul').slideUp('fast');
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			// element.siblings('li').find('ul').slideUp('fast');
		}
		return false;
	});
	});//끝 
			


	