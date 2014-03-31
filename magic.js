$(document).ready(function(){
	$("#add").click (function(){
		var input = $("#items").val();
		var list = $("<div id='groceries'></div>").text(input);	

		list.on('click', function(){
			$(list).toggleClass("checked-off");
		});

		list.on('dblclick', function(){
			$(list).hide();
		});

		if (input!=" "){
			$("#container").append(list);
			$("#items").val("");
		}
	});
});

