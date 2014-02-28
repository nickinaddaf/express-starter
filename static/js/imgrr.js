$('#toggle_image').click(function() {
	if ($('#toggle_image').text()==='Go Away!' ) {
		$('#gorilla_img').hide();
  		$('#toggle_image').text('Come back!');
	}
	else {
		$('#gorilla_img').show();
		$('#toggle_image').text('Go Away!');
	}
});

// Problem 3 (Swap Em) -----------------------------------------------
$('#change_img').click(function() {
	$('#gorilla_img').attr('src','/static/img/'+$('#new_img_file').val())
});	

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  alert($(this).attr('src'));
});

// Problem 5 (Imgrr) -------------------------------------------------
$('.clickable2').click(function() {
  $(this).attr('src','/static/img/'+$('SOMETHING'))
});
