document.addEventListener('DOMContentLoaded', function () {
  
  	var rand_number = Math.floor(Math.random() * 50) + 1;
	var url = "http://localhost/adc/api/quotes/random";

	$.ajax({

	  url: url,
	  method: 'GET',
		type: "json",
	  error: function(err) {
  		//var h1 = '<h1></h1>';
  		//var body = '<p>Those who say truth is stranger than fiction have wasted their time on poorly written fiction.</p>';
	  	$('.holder').html("loading...");
	  }

	}).done( function(json) {
		
  		
  		//var link = 'http://img-9gag-fun.9cache.com/photo/aeYg2Bq_700b_v2.jpg'; //'<a href=' + msg.url + '> Kwotspirasyon by: Chuck Norris </a>';
  		var h1 = '<img src="'+ json.image_url +'" /> <br/>';
  		var body = '<p>' + '"' + json.text + '"' + '</p>';

			$('.holder').html(h1 + body);

  		$('.twitter-share-button')
				.attr('href', 'https://twitter.com/intent/tweet?text="' 
					+ json.text + '"' + '&button_hashtag=kwotspirasyon&hashtags=kwotspirasyon');

  		var fbUrl = 'http://www.facebook.com/sharer/sharer.php?u={link}&title={title}&caption={caption}&description={description}'
				.replace('{link}', json.image_url)
				.replace('{title}', 'kwotspirasyon')
				.replace('caption', 'kwotspirasyon.com')
				.replace('description', json.text);

  		$('.share-fb').attr('href',fbUrl);

  	});
  	
});