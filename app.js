
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Toulouse&appid=b4e6e981525f7f9d85df112d8f2209ce&units=metric',
	function(data){
	$('#meteo').html("La température actuelle de Toulouse est de "+data.main.temp+"°C"+"<br/>"+"Descriptions : "+data.weather[0].description)
	switch(data.weather[0].main){
		case "Drizzle":
		case "Rain":
		$('#temps').attr('src','https://images8.alphacoders.com/368/368780.jpg');
		break;
		case"Clouds":
		$('#temps').attr('src','http://aaj.tv/wp-content/uploads/2015/10/partly-cloudy.jpg');
		break;
		case "Clear":
		$('#temps').attr('src','http://www.clipartsuggest.com/images/445/blue-sky-ash-s-machiavellian-bloggery-tHG5ib-clipart.jpg')
		break;
		default:
		$('#temps').attr('src','')
		break;
	}
})
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Saint-gaudens&appid=b4e6e981525f7f9d85df112d8f2209ce&units=metric',
	function(data){
	$('#adresse').html("La lattitude de Saint Gaudens est : "+data.coord.lat+"<br/>"+"Sa longitude est de : "+data.coord.lon)
})

$.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Toulouse,FR&destinations=Saint-gaudens,FR&key=AIzaSyARFZnPFQnHdWT3jcEjF6PFDDIXN209j2E",
	function(data){
		$('#itineraire').html("La distance entre "+data.destination_addresses+ " et "+data.origin_addresses+" est : "+data.rows[0].elements[0].distance.text+"<br/>Le temps de ce trajet en voiture serait : "+data.rows[0].elements[0].duration.text+"<br/>*Hour = Heure<br/> Mins = Minutes")
	})
 /* Pour cet API telechargez cet addon mozilla (oui ce n'est pas leggit) : https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/?src=search
*/