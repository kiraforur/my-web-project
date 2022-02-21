let comments = [];
if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));

document.getElementById("comment-add").addEventListener("click", function (event) {
    let name = document.getElementById('comment-name').value;
    let body = document.getElementById('comment-body').value;

    let comment = {
        Name: name,
        Body: body,
    }

    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
})

document.getElementById("show").addEventListener("click", function (event) {
    let commentField = document.getElementById('showid');
    let out = '';
    comments.forEach(function (item) {
        out += '<p>'+item.Name+'</p>';
        out += '<p>'+item.Body+'</p>';
    });
    commentField.innerHTML = out;
})