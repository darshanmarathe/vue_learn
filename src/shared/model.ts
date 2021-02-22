class BlogObject{
    id: number;
    likes: Array<Like>;
    dislike: Array<DisLike>;
    body: String;
    postedOn: Date;
    editedOn: Date;
    by:string

}
class Post extends BlogObject {
    comments: Array<Comment>;
}

class Comment extends BlogObject {
    replyComments: Array<Comment>;
}

class Like {
    by: string;
}

class DisLike {
    by: string;
}

export { Post, Comment, Like , DisLike };
