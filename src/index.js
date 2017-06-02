$(document).ready(function(){
  // your code here!
  var list = new instaList()

  $("#photo-form").on("submit", function(event){
  	event.preventDefault()
  	var url = $( "#image_url" ).select().val()
  	var caption = $( "#caption" ).select().val()
  	list.addInsta(url,caption)
  	$("#photo-list").html(list.render())
	clearForm.call(this)

  })
})

function clearForm() {
	this.reset()
}
