document.addEventListener('DOMContentLoaded', function () {
  
  	var rand_number = Math.floor(Math.random() * 50) + 1;
	var url = 'http://jsonplaceholder.typicode.com/posts/{rand_number}'.replace('{rand_number}', rand_number);
	
	$.ajax({
	  url: url,
	  method: 'GET'
	}).done( function(msg) {
		var h1 = '<h1>' + msg.title + '</h1>'; 
  		var body = '<p>' + msg.body + '</p>';
  		$('.holder').html(h1 + body);
  	});


});