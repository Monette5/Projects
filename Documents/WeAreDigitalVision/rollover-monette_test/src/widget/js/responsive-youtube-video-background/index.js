if(vid || vid2){
	console.log('youtube1')
	var tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var tv,tv2, playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};

	function onYouTubeIframeAPIReady(){
		var video = cleanseVid(vid[currVid]);

		if(vid){
			tv = new YT.Player(tvid, {
				videoId: video.videoId,
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				},
				playerVars: playerDefaults
			});
		}

		if(vid2){
			tv2 = new YT.Player(tvid2, {
				events: {
					'onReady': onPlayerReady2,
					'onStateChange': onPlayerStateChange2
				},
				playerVars: playerDefaults
			});
		}

		$('.play_vid').click(function(){
			console.log('gdfdgg');
				var $this = $(this);
				$this.toggleClass('pause_vid');
				if($this.hasClass('pause_vid')){
				//	tv.loadVideoById(cleanseVid(vid[currVid]));
				tv.playVideo();
				} else {
					tv.pauseVideo();
				}
		});

		$('.play_vid2').click(function(){
			console.log('dfdf');
			var $this = $(this);
			$this.toggleClass('pause_vid2');
			if($this.hasClass('pause_vid2')){
				tv2.playVideo();
			} else {
				tv2.pauseVideo();
			}
		});

	}
}

// Strip all url text and return video id
function cleanseVid(opts) {
	if(opts && opts.videoId.indexOf("https://youtu.be/") != -1) {
		var ids = opts.videoId.split('/');
		opts.videoId = ids[ids.length-1];
	} else if (opts && opts.videoId) {
		var ids = opts.videoId.split('=');
		opts.videoId = ids[ids.length-1];
	}
	return opts;
}

function onPlayerReady(event) {
	// Load the video with the current start and end time
	// Load the video with the current start and end time
	if(settings.youtube0autoplay === 'true') {
		tv.loadVideoById(cleanseVid(vid[currVid]));
	} else {
		tv.loadVideoById(cleanseVid(vid[currVid]));
		tv.stopVideo();
	}

//	tv.loadVideoById(cleanseVid(vid[currVid]));

	// Mute by default
  tv.mute();

	// Unmute if youtube0mute is false
  if(settings.youtube0mute == 'false' || settings.youtube0mute == false || settings.youtube0mute == 0){
		tv.unMute();
	}else{
		tv.mute();
	}
}

function onPlayerStateChange(event) {
	// If the video has finished loop back to the beginning
	/*	if (event.data === 2){
			tv.seekTo(vid[currVid].startSeconds);
		}**/
	if (event.data === 0){
		if(settings.youtube0loop === "true") {
			tv.seekTo(vid[currVid].startSeconds);
		} else {
			tv.pauseVideo();
		}
	}
}

function onPlayerReady2(){

	// Load the video with the current start and end time
	if(settings.youtube1autoplay === 'true') {
		tv2.loadVideoById(cleanseVid(vid2[currVid2]));
	} else {
		tv2.loadVideoById(cleanseVid(vid2[currVid2]));
		tv2.stopVideo();
	}

	// Mute by default
  tv2.mute();

	// Unmute if youtube1mute is false
	if(settings.youtube1mute == 'false' || settings.youtube1mute == false || settings.youtube1mute == 0){
		tv2.unMute();
	}else{
		tv2.mute();
	}
}

function onPlayerStateChange2(event) {
	// If the video has finished loop back to the beginning or pause the video
	if (event.data === 0){
		if(settings.youtube1loop === "true") {
			tv2.seekTo(vid2[currVid2].startSeconds);
		} else {
			tv2.pauseVideo();
		}
	}
}

function vidRescale(){
  var w = $(window).width()+5,
    h = $(window).height()+5;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv  #'+ tvid +'.screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv  #'+ tvid +'.screen').css({'margin-left': -($('.tv  #'+ tvid +'.screen').outerWidth()+5-w)/2});
	 $('.tv  #'+ tvid +'.screen').css({'margin-top': -($('.tv  #'+ tvid +'.screen').outerHeight()+5-h)/2});
  }
}


function vidRescale2(){
  var w = $(window).width()+5,
    h = $(window).height()+5;
   if (w/h > 16/9){
    tv2.setSize(w, w/16*9);
    $('.tv2  #'+ tvid2 +' .screen').css({'margin-left': '0px'});
  } else {
    tv2.setSize(h/9*16, h);
    $('.tv2  #'+ tvid2 +'.screen').css({'margin-left': -($('.tv2  #'+ tvid2 +'.screen').outerWidth()+5-w)/2});
	 $('.tv2  #'+ tvid2 +'.screen').css({'margin-top': -($('.tv2  #'+ tvid2 +'.screen').outerHeight()+5-h)/2});
  }
}

$(window).on('load resize', function(){
		if(vid){
			vidRescale();
		}

		if(vid2){
			vidRescale2();
		}
});
