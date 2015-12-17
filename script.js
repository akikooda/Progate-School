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
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	
	// コラム
	
	// お問い合わせ

});