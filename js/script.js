$(function(){
	
	setInterval(function(){
	$(".fade").fadeIn();
	},300);	
	
	$('section').mousewheel(function(v,delta){
	if(delta>0){ 
		m=$(this).prev().offset().top;
		$('html, body').stop().animate({scrollTop:m},800);
	} else {
		m=$(this).next().offset().top; 
		$('html, body').stop().animate({scrollTop:m},800);
		}
	});
	/*
	$(window).on('mousewheel',function(e){
    if(e.originalEvent.wheelDelta < 0){
        //업
        $('html,body').stop().animate({
            scrollTop:'-=970px'
        },500);
    } else {
        //다운
        $('html,body').stop().animate({
            scrollTop:'+=970px'
        },500);
    }
    return false;
});
*/

	/*navi*/
$('.navi li').on('click',function(e){
	e.preventDefault();
	var index=$(this).index();
	var thisSection=$('section').eq(index);
	var pos=thisSection.position().top;
	$('html, body').animate({'scrollTop':pos});
});/*
$('.navi li').click(function(){
	$(this).css({transform:"scale(1.5)"})
	$('.navi li').not(this).css({transform:"scale(1)"})
});	*/	
	
	
	/*skill*/
$(window).scroll(function(){
	var aa=parseInt($(this).scrollTop()); 
	if (aa>500) {
	$(".PS>.graph").animate({width:"270px"},800);	
	$(".AI>.graph").animate({width:"285px"},800);
	$(".HTML>.graph").animate({width:"260px"},800);
	$(".CSS>.graph").animate({width:"250px"},800);
	$(".JS>.graph").animate({width:"150px"},800);
	$(".JQ>.graph").animate({width:"200px"},800);
	}
	});	
	
	setInterval(function(){
	$("section>img:nth-child(6)").animate({top:0})
	$("section>img:nth-child(6)").animate({top:"-25px"})
	},500);
	setInterval(function(){
	$("#section7>img:nth-child(5), .cat").animate({left:"45px"})
	$("#section7>img:nth-child(5), .cat").animate({left:"25px"})
	},500);
	
	
	$("section>a:nth-child(7),#section7 p:nth-child(3)").mouseenter(function(){
		$(this).stop().animate({backgroundColor:"#fff", color:"#6e6eff",letterSpacing:"6px",fontWeight:"bold"})
	});
	$("section>a:nth-child(7),#section7 p:nth-child(3)").mouseleave(function(){
	$(this).stop().animate({backgroundColor:"#6e6eff", color:"#fff",letterSpacing:"5px",fontWeight:"bold"})
	});
	
	$(".close").click(function(){
		$(".phoneDetail").hide();
	});
	
	
	$("#section7 p:nth-child(3)").click(function(){
		$(".phoneDetail").show();
	});
	var n=0;
	var img_count=$(".phoneSlide li").last().index()+1;
	
	$(".button1>img").click(function(){
		n++;
		if(n==img_count){
			$(".phoneSlide").css({left:0});
			n=1;
		}
		$('.phoneSlide').stop(true).animate({left:-600*n});		
	});
	
	$(".button2>img").click(function(){
		n--;
		if(n==-1){
			$(".phoneSlide").css({left:-600*(img_count-1)});
			n=4;
		}
		$('.phoneSlide').stop(true).animate({left:-600*n});	
	});
	

	$(".box1>img").click(function(){
		$(".up_back,.up1").show();
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up1").hide();
	});

	$(".box2>img").click(function(){
		$(".up_back,.up2").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up2").hide();
	});
	
	$(".box3>img").click(function(){
		$(".up_back, .up3, .button4>img, .button3>img, .detail2>div").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back, .up3, .button4>img, .button3>img, .detail2>div").hide();
	});
	
	$(".box4>img").click(function(){
		$(".up_back,.up4").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up4").hide();
	});
	
	$(".box5>img").click(function(){
		$(".up_back,.up5").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up5").hide();
	});
	
	$(".box6>img").click(function(){
		$(".up_back,.up6").show()
	});
	$(".close2, .up_back").click(function(){
		$(".up_back,.up6").hide();
	});
	var nom=0;
	var bb=$(".up3>ul>li").last().index()+1;
	
	$(".button3>img").click(function(){
		nom++;
		if(nom==bb){
			$(".up3").css({left:0});
			nom=1;
		}
		$('.up3').stop(true).animate({left:-500*nom});		
	});
	
	$(".button4>img").click(function(){
		nom--;
		if(nom==-1){
			$(".up3").css({left:-500*(bb-1)});
			nom=11;
		}
		$('.up3').stop(true).animate({left:-500*nom});	
	});


































});