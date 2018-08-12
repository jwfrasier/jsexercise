// create Comment class here
'use strict'

// `new Comment(comment, imageId)`
// Should initialize with an id, image object(findImage) and commentContent(the actual text of the comment)
class Comment {
  constructor(commentContent, imageId) {
    this.id = this.constructor.all.length;
    this.commentContent = commentContent;
    this.image = this.findImage(imageId);
    this.constructor.all.push(this); // Should save new comment to Comment.all property
  }
 
  // `Comment.prototype.findImage(imageId)`
  findImage(imageId) {
    let activeImage = Image.all[imageId];
      // Given an`int` for an image id, returns the image object with that id
    let imageObj = {
      id: this.id,
      commentContent: this.commentContent
    };
    // Before return - adds current comment to image's comments property
    activeImage.comments.push(imageObj);
    return activeImage;
  }
    // `Comment.prototype.commentEl()`
    //  Returns a string of html
    //  Html has an`li` tag with an`id` field and shows the comment
    commentEl() {
        return `<li class="comment" id=${this.id}">
        <p>${this.commentContent}</p>
        </li>`;
    }
}
// `Comment.all`
// should return all of the comment objects in an array
Comment.all = [];