class CommentList {
  constructor(comments){
    this.comments = []
    this.render = function() {
      return this.comments.forEach(comment => {
        '<ul>' + comment.render() + '</ul>'
      })
    }
  }

  addComment(string) {
    var comment = new Comment()
    comment.content = string
    debugger
    this.comments.push(comment)
  }
}
