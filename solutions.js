class CommentsController {
    constructor() {
        this.$addCommentForm = $(".add-comment");
    }

    init() {
        // kick off controller from here
        this.addCommentFormListener();
    }
    // `CommentsController.prototype.addCommentFormListener()`
    //  Execute the render function on that found image object to append the new comment
    addCommentFormListener() {

        // Create this to be in self, because self is only used in addCommentFormListener() scope which will reference the correct moment of "this" via an alias.
        const self = this;
        //  Iterates through each comment form and adds an eventlistener to trigger a function on form submit
        for (let index = 0; index < this.$addCommentForm.length; index++) {
            this.$addCommentForm[index].addEventListener("submit", function (event) {
                // Prevent page from reloading on submit
                event.preventDefault();
                //  Function should grab the imageId + comment and create a new Comment with those arguments
                const currentImageId = parseInt($(this).data("id"));
                const commentContent = $(
                    `#comment-description-${currentImageId}`
                ).val();
                const newComment = new Comment(commentContent, currentImageId);
                self.render(newComment);
                $(`#comment-description-${currentImageId}`).val("");
            });
        }
    }
    // `CommentsController.prototype.render(commentObject)`
    // Selects the appropriate`ul` for this comment to be added to
    // Appends the new comment element to this `ul`
    render(commentObject) {
        $(`#comments-${commentObject.image.id}`).append(commentObject.commentEl());
    }
}

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
        const activeImage = Image.all[imageId];
        // Given an`int` for an image id, returns the image object with that id
        const { id, commentContent } = this;
        // Before return - adds current comment to image's comments property
        activeImage.comments = [
            ...activeImage.comments,
            { id, commentContent }
        ]
        return activeImage
    }
    // `Comment.prototype.commentEl()`
    //  Returns a string of html
    //  Html has an`li` tag with an`id` field and shows the comment
    commentEl() {
        return `<li class="comment" id=${this.id}">
        <h4>${this.commentContent}</h4>
        </li>`;
    }
}
// `Comment.all`
// should return all of the comment objects in an array
Comment.all = [];