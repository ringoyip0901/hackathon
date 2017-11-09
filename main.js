// var url = "https://api.yelp.com/oauth2/token";
// var grant_type: "client_credentials";
// var client_id: "eBCZdzTs4CwpqGKkghEfpQ";
// var client_secret: "TKNHHYt1KOfMNSAbe1Rm6Io3LlW62yITIKVHlp6WCbn9857QG6uQeAB1q3SIiQaW";





//   $('body').on('keydown', function(e) {
//     if (e.keyCode === 37) {
//       head.currentDirection = 'left';

//       for (let i = 0 ; i < bodyArray.length;i++){


//       }
//     }
//     if (e.keyCode === 39) {
//       head.currentDirection = 'right';

//       for (let i = 0 ; i < bodyArray.length;i++){


//       }
//     }
// }

function findFood(){
	var restaurant = document.getElementById('restaurant').value;
	var location = document.getElementById('location').value;
	window.location.href = "https://www.yelp.com/search?find_desc=" + restaurant + "&find_loc=" + location;
}