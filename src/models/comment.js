// create Comment class here
'use strict'

class Comment {
    constructor(commentContent, imageId) {
        this.id = this.constructor.all.length;
        this.commentContent = commentContent;
        this.image = this.findImage(imageId);
        this.constructor.all.push(this)
    }

    commentEl(){
        return `<li class="comment" id=${this.id}">
        <p>${this.commentContent}</p>
        </li>`;
    }

    findImage(imageId) {
        let activeImage = Image.all[imageId]
        let imageObj = {
            id: this.id,
            commentContent: this.commentContent
        }
        activeImage.comments.push(imageObj)
        return activeImage;
    }
}

Comment.all = [];