/* blog.js */

document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');

    // Function to retrieve blog posts from localStorage
    function getBlogPosts() {
        return JSON.parse(localStorage.getItem('posts')) || [];
    }

    // Function to generate HTML for each blog post
    function generatePostHTML(post) {
        return `
            <div class="post">
                <h2>${post.title}</h2>
                <p><strong>Author:</strong> ${post.username}</p>
                <p>${post.content}</p>
            </div>
        `;
    }

    // Function to display blog posts
    function displayPosts() {
        const posts = getBlogPosts();
        if (posts.length === 0) {
            postsContainer.innerHTML = '<p>No posts found.</p>';
        } else {
            const postsHTML = posts.map(post => generatePostHTML(post)).join('');
            postsContainer.innerHTML = postsHTML;
        }
    }

    displayPosts();
});