class Comment {
  constructor(content){
    this.content = content
    this.commentList = "none"
    this.render = function(){
      return `<li>${this.content}</li>`
    }
  }

}
