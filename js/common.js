$(function() {
	$('.btn_download').click(function(){
		$.ajax({
            url: "./data/dx.txt",
            success: function(data){
                $.facybox(data);
            }
        });
		return false;
	});
});
