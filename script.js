$(function(){

	// top-wrapper
	$('.detail').click(function(){

		if($('.detail').hasClass('detail-active')){
			$('.detail').text('もっと詳しく');
			$('#detail-message').hide();
			$('.top-inner').css('padding','173px 0 150px 0');
			$('.detail').removeClass('detail-active');

		}else{
			$('.detail').text('閉じる');
			$('#detail-message').fadeIn();
			$('.top-inner').css('padding','173px 0 120px 0');
			$('.detail').addClass('detail-active');
		}

	});
	
	// メンター紹介
	$('.auto-play').slick({
		dots:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		speed: 300,
		infinite:true,
	});
	
	// コラム

	$('.column-photo').hover(
		function(){
			$(this).find('.zoom-black').fadeIn(200);
			$(this).find('img').css('transform','scale(1.2)');
		},
		function(){
			$(this).find('.zoom-black').fadeOut(200);
			$(this).find('img').css('transform','scale(1.0)');
		});

	$('.column-btn').click(function(){

		var id_name = $(this).attr('id');

		if(id_name == 'all'){
			$('.column-box').fadeIn();
			$('.column-btn').removeClass('active');
			$(this).addClass('active');

		}else if(id_name == 'tips'){
			$('.columns').fadeOut();
			$('.tips').fadeIn();
			$('.column-btn').removeClass('active');
			$(this).addClass('active');
			
		}else if(id_name == 'column-clicked'){
			$('.tips').fadeOut();
			$('.columns').fadeIn();
			$('.column-btn').removeClass('active');
			$(this).addClass('active');
		}

	});
	
	// お問い合わせ
	$('.submit-btn').click(function(){
			if($("input[name='email-input']").val()==""){
				$('.please-input-email').css('display','block');
			}else{
				if($("input[name='subject-input']").val()==""){
					$('.please-input-subject').css('display','block');
				}else{
					if($("textarea[name='message-input']").val()==""){
						$('.please-input-message').css('display','block');
				}else{

				}
			}
		}
	});

});