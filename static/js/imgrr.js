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
$('#little_one').click(function() {
    var big_pic = $("#bigpic").attr('src');
    var little_pic = $("#little_one").attr('src');
    $('#little_one').attr('src', big_pic);
    $('#bigpic').attr('src', little_pic); 
});
$('#little_two').click(function() {
    var big_pic = $("#bigpic").attr('src');
    var little_pic = $("#little_two").attr('src');
    $('#little_two').attr('src', big_pic);
    $('#bigpic').attr('src', little_pic); 
});
$('#little_three').click(function() {
    var big_pic = $("#bigpic").attr('src');
    var little_pic = $("#little_three").attr('src');
    $('#little_three').attr('src', big_pic);
    $('#bigpic').attr('src', little_pic); 
});
