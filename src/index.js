$(document).ready(function(){
  $('#note-form').on('submit', function(event){
    event.preventDefault()
    var comment = new Comment
    comment.content = $('#inputText').val()
    $('#comment-list').append('<div>' + comment.content + '</div>')
  })
})
