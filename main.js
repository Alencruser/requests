$.getJSON("",function(data){
	var meteo=[];
	$.each(data, function(key,val){
		meteo.push(key+val)
	});
});
