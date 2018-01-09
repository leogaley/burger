
$(document).ready(function(){

	$('li').on("click",function(){
		var url = "/api/update/" + $(this).attr("data-id");
	
		$.ajax({
			url:url,
			method: 'PUT'
		}).then(function(id){
			location.reload();
		});
	})

	$("#burger-form").on("submit",function(event){
		event.preventDefault();

		var burger = {
			name: $("#burger-form [name=burger]").val().trim()
		}

		$.ajax({
			url: "/api/new/",
			data:burger,
			type:"POST"
		}).then(function(){
			location.reload();
		})

	})

})