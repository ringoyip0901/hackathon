function findFood(){
	var restaurant = document.getElementById('restaurant').value;
	var location = document.getElementById('location').value;
	window.location.href = "https://www.yelp.com/search?find_desc=" + restaurant + "&find_loc=" + location;
}