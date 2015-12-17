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
	$('.autoplay').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	
	// コラム

	
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