$(document).ready(function() {
	if($('.fancybox-media').length) {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

	$(".replace-thumb").each(function(){
		if($(this).attr('href').indexOf('youtube') > -1) {
			var thumbnailId = $(this).attr("href").split("=")[1];
			var thumbnailImage = "http://img.youtube.com/vi/" + thumbnailId + "/0.jpg";
			$(this).html("<img src='"+thumbnailImage +"'>");
		} else if($(this).attr('href').indexOf('vimeo') > -1) {
			var video_id = '50742088';
			var $el = $(this);
    		$.ajax({
        		type:'GET',
		        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
		        jsonp: 'callback',
		        dataType: 'jsonp',
		        success: function(data){
		        	$el.html("<img src='"+data[0].thumbnail_large +"'>");
		        }
		    });

		}
	});
}


function showThumb(data){
    var id_img = "#vimeo-" + data[0].id;
    $(id_img).attr('src',data[0].thumbnail_medium);
}

setTimeout(function() {
		$('.mainheader').addClass('on');
	}, 100);
setTimeout(function() {
		$('#tagline').addClass('on');
	}, 2000);


	setTimeout(function() {
		$('#appscircle').addClass('on');
	}, 400);
	setTimeout(function() {
		$('#startupexperience').addClass('on');
	}, 500);
	setTimeout(function() {
		$('#skills').addClass('on');
	}, 400);


	setTimeout(function() {
		$('#fashioncircle').addClass('on');
	}, 400);
	setTimeout(function() {
		$('#startupcircle').addClass('on');
	}, 1000);
	setTimeout(function() {
		$('#legalcircle').addClass('on');
	}, 1400);
	setTimeout(function() {
		$('#mediacircle').addClass('on');
	}, 1800);
	setTimeout(function() {
		$('#socialcircle').addClass('on');
	}, 2200);


	setTimeout(function() {
		$('#trademark').addClass('on');
	}, 500);
	setTimeout(function() {
		$('#contracts').addClass('on');
	}, 500);
	setTimeout(function() {
		$('#education').addClass('on');
	}, 500);
	setTimeout(function() {


		$('#anchr').addClass('on');
	}, 100);
	setTimeout(function() {
		$('#fashiontechstartups').addClass('on');
	}, 200);
	setTimeout(function() {
		$('#ms-jd').addClass('on');
	}, 100);
});