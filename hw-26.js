'use strict'

const url = 'https://jsonplaceholder.typicode.com';
const postList = document.querySelector('#post-list');
const searchId = document.querySelector('#search-id');

searchId.addEventListener('input', () => {
    const postId = searchId.value;
    if (postId === '') {
        getAllPosts();
    } else {
        searchPost(postId);
    }
});

function searchPost(id) {
    fetch(`${url}/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            postList.innerHTML = '';
            if (data.id) {
                showAllPost([data]);
            } else {
                const notFound = document.createElement('li');
                notFound.innerText = 'Post not found';
                postList.appendChild(notFound);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function showComments(postId) {
    fetch(`${url}/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.createElement('div');
            commentsContainer.classList.add('comments-container');

            comments.forEach(comment => {
                const commentItem = document.createElement('div');
                commentItem.classList.add('comment-item');

                const commentEmail = document.createElement('span');
                commentEmail.innerText = comment.email;

                const commentBody = document.createElement('p');
                commentBody.innerText = comment.body;

                commentItem.append(commentEmail, commentBody);
                commentsContainer.appendChild(commentItem);
            });

            postList.appendChild(commentsContainer);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function showAllPost(postsArr) {
    postList.innerHTML = '';
    postsArr.forEach((item) => {
        const post = document.createElement('li');
        post.classList.add('post-list-item');

        const postIndex = document.createElement('span');
        postIndex.classList.add('post-index');
        postIndex.innerText = item.id;

        const postTitle = document.createElement('h4');
        postTitle.classList.add('post-title');
        postTitle.innerText = item.title;

        const commentBtn = document.createElement('button');
        commentBtn.classList.add('comment-btn');
        commentBtn.innerText = 'Show all comments';

        commentBtn.addEventListener('click', () => {
            showComments(item.id);
        });

        post.append(postIndex, postTitle, commentBtn);
        postList.appendChild(post);
    });
}


function getAllPosts() {
    fetch(url + '/posts')
        .then(response => response.json())
        .then(data => showAllPost(data))
}

getAllPosts()


