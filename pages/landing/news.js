var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?region=US&q=COCA",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "e91e435920msh8dcb105c121cdf2p126568jsn1556c896b606"
	}
}

$.ajax(settings).done(function (response) {

  data = JSON.parse(JSON.stringify(response)); 

  $('#noticias').append('<b>BREAKING NEWS: </b>');

  $.each(data.news, function(i,item){
    $('#noticias').append('<a href="' + item.link + '">' + item.title + '</a> ' + ' | ');
  });

});
