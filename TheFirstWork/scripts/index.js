/*var script = document.createElement('SCRIPT'); 

script.src = "https://api.vk.com/method/getProfiles?uid=66748&access_token=533bacf...&callback=callbackFunc"; 

document.getElementsByTagName("head")[0].appendChild(script); 

function callbackFunc(result) { 
  alert(result); 
} */
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
			if(this.status == 0)
			{
				var error0 = new Error(this.statusText);
				error0.code = this.status;
				reject(error0);
			}
			if(this.status == 403)
			{
				var error403 = new Error(this.statusText);
				error403.code = this.status;
				reject(error403);
			}
			if(this.status == 404)
			{
				var error404 = new Error(this.statusText);
				error404.code = this.status;
				reject(error404);
			}
			if(this.status == 500)
			{
				var error500 = new Error(this.statusText);
				error500.code = this.status;
				reject(error500);
			}
		};
		xhr.send(); 
	});
};

getJson('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6bfde9f75bb686cfaf1acc61a7abd5cd&artist=Cher&album=Believe&format=json')
	.then(
		response =>{
			console.log(response);
			var data;
		  var template = Handlebars.compile( $('#template').html() );
			$('.updates').append( template(response) );
		},
			error0 =>{
				alert('Connection lost. Please check your Internet connection!')
			} ,
			error403 =>{
				alert('Forbidden')
			} ,
			error404 =>{
				alert('Not found')
			}, 
			error500 =>{
				alert('Internal server error')
			});



/*function getJson(url)
{
	var data;
	var template = Handlebars.compile( $('#template').html() );
	var xhr =new XMLHttpRequest();
	xhr.open('GET', url ,true);
	xhr.send(); 


	xhr.onreadystatechange = function(){
		if(xhr.readyState != 4) 
			return;

		button.innerHTML = "Готово!";

		if(xhr.status != 200) alert(xhr.status + ": " + xhr.statusText);
		else {
			data = xhr.responseText;
			console.log(data);
			$('.updates').append( template(data) );
		}
	}

	


	button.innerHTML = "Загрузка...";
	button.disabled = true;
}*/



/*
Here are the details of your new API account.
Application name	Abaddon1271
API key	6bfde9f75bb686cfaf1acc61a7abd5cd
Shared secret	f2440417c4dc962a357d66d6edb5aee1
Registered to	Abaddon1271
*/