document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const postData = {
            username: username,
            title: title,
            content: content
        };

        // Save post data to localStorage
        savePostData(postData);

        // Redirect to posts page
        window.location.href = 'blog.html';
    });

    function savePostData(postData) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(postData);
        localStorage.setItem('posts', JSON.stringify(posts));
    }
});