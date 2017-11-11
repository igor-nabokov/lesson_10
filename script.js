window.onload = function () {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'phones.json', false);
	xhr.send();
	if (xhr.status != 200) {
		alert(xhr.status + ': ' + xhr.statusText);		
	} else {
		var phones = JSON.parse(xhr.responseText);
		var brands = document.getElementById('brands');
		for (var i = 0; i < phones.length; i++) {
			var elem = document.createElement('div');
			elem.className = "phone";
			elem.innerHTML = phones[i].brand;
			brands.appendChild(elem);
		}
	}
}