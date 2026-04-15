function updatePost(params) {
    var blogId = params.blogId;
    var postId = params.postId;
    var accessToken = params.accessToken;
    var title = params.title;
    var content = params.content;

    var url = "https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts/" + postId;

    var headers = {
        "Authorization": "Bearer " + accessToken,
        "Content-Type": "application/json"
    };

    var body = {
        "title": title,
        "content": content
    };

    var config = {
        "method": "PUT",
        "body": body
    };

    return kony.net.invokeHttpRequest(url, headers, config);
}

function addComment(params) {
    var blogId = params.blogId;
    var postId = params.postId;
    var accessToken = params.accessToken;
    var commentText = params.commentText;

    var url = "https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/posts/" + postId + "/comments";

    var headers = {
        "Authorization": "Bearer " + accessToken,
        "Content-Type": "application/json"
    };

    var body = {
        "content": commentText
    };

    var config = {
        "method": "POST",
        "body": body
    };

    return kony.net.invokeHttpRequest(url, headers, config);
}
