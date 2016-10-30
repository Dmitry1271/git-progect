/*var script = document.createElement('SCRIPT'); 

script.src = "https://api.vk.com/method/getProfiles?uid=66748&access_token=533bacf...&callback=callbackFunc"; 

document.getElementsByTagName("head")[0].appendChild(script); 

function callbackFunc(result) { 
  alert(result); 
} */
"use strict";

function getJson(url)
{
var xhr =new XMLHttpRequest();
xhr.open('GET', url ,true);
xhr.send(); 

xhr.onreadystatechange = function(){
	if(xhr.readyState != 4) 
		return;

		button.innerHTML = "Готово!";

	if(xhr.status != 200) alert(xhr.status + ": " + xhr.statusText);
	else console.log(xhr.responseText);
}


button.innerHTML = "Загрузка...";
button.disabled = true;
}


