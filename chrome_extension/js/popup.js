document.addEventListener('DOMContentLoaded', function () {
  
  	var rand_number = Math.floor(Math.random() * 50) + 1;
	var url = "https://api.chucknorris.io/jokes/random";

	$.ajax({

	  url: url,
	  method: 'GET',
	  error: function(err) {
  		var h1 = '<h1></h1>';
  		var body = '<p>Those who say truth is stranger than fiction have wasted their time on poorly written fiction.</p>';
	  	$('.holder').html(h1 + body);
	  }

	}).done( function(msg) {
  		
  		var link = 'http://img-9gag-fun.9cache.com/photo/aeYg2Bq_700b_v2.jpg'; //'<a href=' + msg.url + '> Kwotspirasyon by: Chuck Norris </a>';
  		var h1 = '<img src="'+ msg.icon_url +'" /> ' + link + '<br/>';
  		var body = '<p>' + '"' + msg.value + '"' + '</p>';

  		$('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text="' + msg.value + '"' + '&button_hashtag=kwotspirasyon&hashtags=chucknorris');

  		$('.holder').html(h1 + body);

  		var fbUrl = 'http://www.facebook.com/sharer/sharer.php?u={link}&title={title}&caption={caption}&description={description}'.replace('{link}', link).replace('{title}', 'kwotspirasyon').replace('caption', 'Chuck norris').replace('description', msg.value);
  		$('.share-fb').attr('href',fbUrl);

  	});
  	
});