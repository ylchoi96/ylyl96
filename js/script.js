$(function(){

    /* -------------- scrollFnc 함수(e) -------------- */

    $('.gnb a').on('click', function(e){
       e.preventDefault();
       var index=$(this).parent().index(); // li 인덱스번호를 넣는다.
       var thisSection=$('.section').eq(index);
       var pos=thisSection.position().top;  //각 색상의 경계면의 상단값
       $('html, body').animate({'scrollTop':pos});
    });

	$('.section').mousewheel(function(e,delta){
		if(delta > 0){
		m = $(this).prev().offset().top;
		$('html, body').stop().animate({scrollTop:m});
		}else{
		m = $(this).next().offset().top;
		$('html, body').stop().animate({scrollTop:m});
		}
	});
	
	/*메뉴 아이콘*/
	$(document).ready(function(){
	  $(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	  });
	});
	
	/*메뉴 아이콘 클릭시*/
	$('.hamburger').click(function(){
		$(".gnb").slideToggle();
	});
	
	/*pcframe1*/
	$(".pc-frame1").mouseenter(function(){
		$(".web-frame>img").stop().animate({top:-680},2000)
	});
	$(".pc-frame1").mouseleave(function(){
		$(".web-frame>img").stop().animate({top:0},2000)
	});
	
	/*pcframe2*/
	$(".pc-frame2").mouseenter(function(){
		$(".web-frame>img").stop().animate({top:-1410},3000)
	});
	$(".pc-frame2").mouseleave(function(){
		$(".web-frame>img").stop().animate({top:0},3000)
	});
	
	/*pcframe3*/
	$(".pc-frame3").mouseenter(function(){
		$(".web-frame>img").stop().animate({top:-1410},3000)
	});
	$(".pc-frame3").mouseleave(function(){
		$(".web-frame>img").stop().animate({top:0},3000)
	});
	
	/*포스터 눌렀을때 페이지 내용 불러오기*/
	$("ul li img").click(function(){
		$('.list span').eq(0).text($(this).attr('number'));
		$('.list span').eq(1).text($(this).attr('title'));
		$('.list span').eq(2).text($(this).attr('sub'));
		$('.list span').eq(3).text($(this).attr('tools'));
		$('.list span').eq(4).text($(this).attr('explain'));	
	});
	
	$(".graphic li:nth-child(1) img").click(function(){
		$('#imgbutton a').attr('href',"images/poster2.jpg");
	});
	$(".graphic li:nth-child(2) img").click(function(){
		$('#imgbutton a').attr('href',"images/poster3.jpg");
	});
	$(".graphic li:nth-child(3) img").click(function(){
		$('#imgbutton a').attr('href',"images/poster4.jpg");
	});
	$(".graphic li:nth-child(4) img").click(function(){
		$('#imgbutton a').attr('href',"images/poster5.png");
	});
	
	$(".graphic1 li img").click(function(){
		$('.list1 span').eq(0).text($(this).attr('number'));
		$('.list1 span').eq(1).text($(this).attr('title'));
		$('.list1 span').eq(2).text($(this).attr('sub'));
		$('.list1 span').eq(3).text($(this).attr('tools'));
		$('.list1 span').eq(4).text($(this).attr('explain'));	
	});
	
	$(".graphic1 li:nth-child(1) img").click(function(){
		$('#imgbutton1 a').attr('href',"images/detailpage1.png");
	});
	$(".graphic1 li:nth-child(2) img").click(function(){
		$('#imgbutton1 a').attr('href',"images/detailpage2.png");
	});
	$(".graphic1 li:nth-child(3) img").click(function(){
		$('#imgbutton1 a').attr('href',"images/detailpage3.png");
	});
	
	
	/*스킬*/
	$(window).ready(function(){
	draw(85, '.pie-chart1', '#dae4ef');
	draw(85, '.pie-chart2', '#f4d8d0');
	draw(80, '.pie-chart3','#f4f1d3');
	draw(85, '.pie-chart4', '#e8dee7');
	draw(95, '.pie-chart5', '#cde5d5');
	draw(95, '.pie-chart6','#e7e9ee');
});

function draw(max, classname, colorname){
   var i=1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i,classname,colorname);
          i++;
      } else{
        clearInterval(func1);
      }
    },10);
}
function color1(i, classname,colorname){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
   });
}

function replay(){
  draw(85, '.pie-chart1', '#dae4ef');
  draw(85, '.pie-chart2', '#f4d8d0');
  draw(80, '.pie-chart3','#f4f1d3');
  draw(85, '.pie-chart4', '#e8dee7');
  draw(95, '.pie-chart5', '#cde5d5');
  draw(95, '.pie-chart6','#e7e9ee');
}
	
	
	
	
	
	

 });
 
