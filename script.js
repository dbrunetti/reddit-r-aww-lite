$(document).ready(function(){
	$.get("https://www.reddit.com/r/aww.json", function(rAwwInfo){
		for (var i = 0; i <10; i++){
			var newId = "postNo" + i;
			$("#post" + i).children('a').attr("href", rAwwInfo.data.children[i].data.url);
			$("#post" + i).children().children('img').attr("src", rAwwInfo.data.children[i].data.thumbnail);
			$("#post" + i).children().children('h3').text(rAwwInfo.data.children[i].data.title);
			$("#post" + i).children().children('p').text(rAwwInfo.data.children[i].data.author);

			//console.log(newId);
			//$("<div id='" + newId + "'>This is div number"+ newId +"</div").appendTo('.posts');
			//$(".posts").append("div").attr("id", newId).text(rAwwInfo.data.children[i].data.title);
		}

	});





});