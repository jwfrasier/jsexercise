class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here
    const holder = this;
    for (const index = 0; index < this.$addCommentForm.length; index++) {
      this.$addCommentForm[index].addEventListener('submit', function
      (event) {
        event.preventDefault();
        const currentImageId = parseInt($(this).data('id'));
        const commentContent = $(`#comment-description-${currentImageId}`).val();
        const newComment = new Comment(commentContent, currentImageId)
        holder.render(newComment)
        $(`#comment-description-${currentImageId}`).val('');
      })
    }
  }

  render(commentObject) {
    $(`#comments-${commentObject.image.id}`).append
    (commentObject.commentEl());
  }
}
