document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;

        const post = {
            title,
            category,
            description,
            feedback: ''
        };

        addPostToDOM(post);
        postForm.reset();
    });

    function addPostToDOM(post) {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-category">Categoria: ${post.category}</div>
            <div class="post-content">${post.description}</div>
            <div class="post-feedback">${post.feedback ? 'Solução encontrada: ' + post.feedback : ''}</div>
            <button class="feedback-btn">Adicionar Feedback</button>
            <div class="feedback-input">
                <input type="text" class="feedback-text" placeholder="Digite seu feedback">
                <button class="feedback-submit">Enviar</button>
            </div>
        `;

        postElement.querySelector('.feedback-btn').addEventListener('click', function () {
            const feedbackInput = postElement.querySelector('.feedback-input');
            feedbackInput.style.display = feedbackInput.style.display === 'none' ? 'block' : 'none';
        });

        postElement.querySelector('.feedback-submit').addEventListener('click', function () {
            const feedbackText = postElement.querySelector('.feedback-text').value;
            post.feedback = feedbackText;
            postElement.querySelector('.post-feedback').textContent = 'Solução encontrada: ' + feedbackText;
            postElement.querySelector('.feedback-input').style.display = 'none';
        });

        postsContainer.prepend(postElement);
    }
});

