"use strict";

var info = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6bfde9f75bb686cfaf1acc61a7abd5cd&artist=Cher&album=Believe&format=json';
function getJson(url)
{
	return new Promise(function(resolve,reject){
		var xhr =new XMLHttpRequest();
		xhr.open('GET', url ,true);
		xhr.responseType = 'json';
		xhr.onload = function(){
			if(this.status == 200) 
			{
				resolve(this.response);
			}
			if(this.status != 200)
			{
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};
		xhr.onerror = function() {
			if(this.status == 0)
				reject(new Error("Connection lost. Please check your Internet connection!"));
			if(this.status == 403)
				reject(new Error("Forbidden"));
			if(this.status == 404)
				reject(new Error("Not found"));
			if(this.status == 500)
				reject(new Error("Internal server error"));
		};
		xhr.send(); 
	});
};
$(document).ready(function() {
	getJson('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6bfde9f75bb686cfaf1acc61a7abd5cd&artist=Cher&album=Believe&format=json')
	.then(
		response =>{
			console.log(response);
			var data;
			var template = Handlebars.compile( $('#template').html() );
			$('.updates').append( template(response) );
		},
		error => {
			console.log(error);
		});
	setInterval(getJson, 10000);
});