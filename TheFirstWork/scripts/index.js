/*var script = document.createElement('SCRIPT'); 

script.src = "https://api.vk.com/method/getProfiles?uid=66748&access_token=533bacf...&callback=callbackFunc"; 

document.getElementsByTagName("head")[0].appendChild(script); 

function callbackFunc(result) { 
  alert(result); 
} */
"use strict";

function getJson(url)
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
}



/*
Here are the details of your new API account.
Application name	Abaddon1271
API key	6bfde9f75bb686cfaf1acc61a7abd5cd
Shared secret	f2440417c4dc962a357d66d6edb5aee1
Registered to	Abaddon1271
*/