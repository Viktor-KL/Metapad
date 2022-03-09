$('.btnRight').click(function function_name(argument) {
	w = $('.returnCardBlur').width()
	let ml = $('.returns_cardsWrapper').css("margin-left")
	let ml_ = ml.slice(0, -2)
		if (ml_ > -(w*11) ) {
	$('.returns_cardsWrapper').css("margin-left", "calc(" + ml + " - 15%)")
}
})


$('.btnLeft').click(function function_name(argument) {
	w = $('.returns_cardsWrapper').width()
	let ml = $('.returns_cardsWrapper').css("margin-left")
	let ml_ = ml.slice(0, -2)
	if (ml_ < 0 ) {
	$('.returns_cardsWrapper').css("margin-left", "calc(" + ml + " + 15%)")
}
})









$('.punktBtn2').click(function function_name(argument) {
	$('.benefit_punkts').removeClass('active_border')
	$('.benefit_punkts2').addClass('active_border')
	$('.benefit_textWrap1').css('display', 'none')
	$('.benefit_textWrap3').css('display', 'none')

	$('.benefit_textWrap2').addClass('activeBenefitOpacity')
	$('.benefit_textWrap2').css('display', 'block')
})

$('.punktBtn1').click(function function_name(argument) {
	$('.benefit_punkts').removeClass('active_border')
	$('.benefit_punkts1').addClass('active_border')
	$('.benefit_textWrap2').css('display', 'none')
	$('.benefit_textWrap3').css('display', 'none')

	$('.benefit_textWrap1').addClass('activeBenefitOpacity')
	$('.benefit_textWrap1').css('display', 'block')

})

$('.punktBtn3').click(function function_name(argument) {
	$('.benefit_punkts').removeClass('active_border')
	$('.benefit_punkts3').addClass('active_border')
	$('.benefit_textWrap2').css('display', 'none')
	$('.benefit_textWrap1').css('display', 'none')

	$('.benefit_textWrap3').addClass('activeBenefitOpacity')
	$('.benefit_textWrap3').css('display', 'block')
})







let count = 1
$('.feedRightBtn').click(function function_name(argument) {
	if (count > 4) {
	$('.feet' + count).removeClass('up')

		$('.feet' + count).css('display', 'none')
		count= 0
	}
	$('.feet' + count).removeClass('up')
	$('.feet' + count).css('display', 'none')
	
	count++;
	
	$('.feet' + count).addClass('up')
	$('.feet' + count).css('display', 'block')
	

})


$('.feedLeftBtn').click(function function_name(argument) {
	if (count < 2) {
	$('.feet' + count).removeClass('up')
	$('.feet' + count).css('display', 'none')
		count= 5
		$('.feet' + count).addClass('up')
		$('.feet' + count).css('display', 'block')
	}
	else {
		$('.feet' + count).removeClass('up')

	$('.feet' + count).css('display', 'none')
	count--;
	$('.feet' + count).addClass('up')
	$('.feet' + count).css('display', 'block')
	}

})