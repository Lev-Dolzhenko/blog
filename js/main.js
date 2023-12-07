/* CREATE SHADOW FOR INPUT */

const blockMail = document.querySelector('.mail__block');
const inputMail = document.querySelector('.mail__block input');

inputMail.addEventListener('focus', function () {
    blockMail.classList.add('universal-shadow');
})

inputMail.addEventListener('blur', function () {
    blockMail.classList.remove('universal-shadow')
})

/* CREATE SHADOW FOR INPUT */

/* CREATE POST */
const inputTitle = document.getElementById('titleInput');
const inputDescription = document.getElementById('descriptionInput');
const inputPhoto = document.getElementById('cover');
const createPostButton = document.getElementById('createPost');

const listPosts = document.querySelector('.posts__row ul');

let editButtonAll;

createPostButton.addEventListener('click', function (event) {
    event.preventDefault();
    createPost(inputTitle.value, inputDescription.value, inputPhoto.value);
    editButtonAll = document.querySelectorAll('.posts__row ul li button');
    popup.classList.add('none');
    checkCountPostCard();
    inputTitle.value = '';
    inputDescription.value = '';
    inputPhoto.value = '';
})
function createPost(title, description, cover) {
    let postID = 'post_' + Math.random().toString(36).substring(2, 9);
    let temp;
    let fileImage = inputPhoto.files[0];
    if (fileImage) {
        temp = URL.createObjectURL(fileImage);
    }

    let postData = {
        id: postID,
        title: title,
        description: description,
        cover: temp
    }

    let postsData = JSON.parse(localStorage.getItem('posts')) || [];

    postsData.push(postData);

    localStorage.setItem('posts', JSON.stringify(postsData));

    listPosts.innerHTML = '';

    postsData.forEach(postData => {
        listPosts.innerHTML +=
            `
            <li id="${postData.id}">
            <h5 class='edit functions'>EDIT</h5>
            <h6 class='delete functions'>DELETE</h6>
            <img src='${postData.cover}'>
            <div class="post__info">
                <h4>${postData.title}</h4>
                <time datetime="2024-05-24T12:00:00Z">${time()} of year</time>
                <p>
                ${postData.description}
                </p>
            </div>
            </li>
            `
            ;
    });

}

/* CREATE POST */

/* CREATE DATE */

function time() {
    let date = new Date();
    let day = date.getDate();
    let month = date.toLocaleString('en-us', { month: 'long' });
    let year = date.getFullYear();
    let editDate = '';
    editDate = day + ' ' + month + ' ' + year;
    return editDate;
}

/* CREATE DATE */

/* EDIT POST */

let editMode = false;

listPosts.addEventListener('click', function (event) {
    const postItem = event.target.closest('li');
    const title = postItem.querySelector('h4');
    const description = postItem.querySelector('p');
    const buttonFlag = postItem.querySelector('h5')

    if (event.target.tagName === 'H5') {
        if (editMode) {
            // Режим сохранения

            // Получить уникальный идентификатор поста или другие данные, которые могут идентифицировать этот пост в localStorage
            const postId = postItem.id; // предположим, что у вас есть уникальный идентификатор поста в виде атрибута id для элемента списка <li>

            // Получить данные из редактируемых полей
            const editedTitle = title.textContent;
            const editedDescription = description.textContent;

            // Получить текущий список постов из LocalStorage
            let postsData = JSON.parse(localStorage.getItem('posts')) || [];

            // Найти отредактированный пост в списке
            let editedPost = postsData.find(post => post.id === postId);
            if (editedPost) {
                // Обновить данные отредактированного поста
                editedPost.title = editedTitle;
                editedPost.description = editedDescription;
            }

            // Сохранить обновленный список постов в LocalStorage
            localStorage.setItem('posts', JSON.stringify(postsData));

            // Вернуться в режим редактирования
            editMode = !editMode;
            title.removeAttribute('contentEditable');
            description.removeAttribute('contentEditable');
            buttonFlag.textContent = 'EDIT';
        }
        else {
            // Режим редактирования
            title.setAttribute('contentEditable', true);
            description.setAttribute('contentEditable', true);
            title.focus();
            buttonFlag.textContent = 'SAVE';

            editMode = !editMode;
        }
    }
});


/* EDIT POST */

/* SHOW LOCALSTORAGE */

function loadPostCard() {
    let postsData = JSON.parse(localStorage.getItem('posts')) || [];

    listPosts.innerHTML = ''; // Очистите существующие посты перед добавлением новых

    postsData.forEach(postData => {
        listPosts.innerHTML +=
            `
            <li id="${postData.id}">
            <h5 class='edit functions'>EDIT</h5>
            <h6 class='delete functions'>DELETE</h6>
            <img src='${postData.cover}'>
            <div class="post__info">
                <h4>${postData.title}</h4>
                <time datetime="2024-05-24T12:00:00Z">${time()} of year</time>
                <p>
                ${postData.description}
                </p>
            </div>
            </li>
        `
            ;
    });
}

loadPostCard();

/* SHOW LOCALSTORAGE */

/* DELETE LOCALSTORAGE ITEM */

listPosts.addEventListener('click', function (event) {
    if (event.target.tagName === 'H6') {
        let currPost = event.target.closest('li');
        let postId = currPost.id; // Предположим, что ID вашего поста хранится в свойстве id элемента <li>

        let postsData = JSON.parse(localStorage.getItem('posts')) || [];

        postsData = postsData.filter(post => post.id !== postId);
        localStorage.setItem('posts', JSON.stringify(postsData));
        checkCountPostCard();
        loadPostCard();
    }
});

/* DELETE LOCALSTORAGE ITEM */

/* SHOW POPUP */

const showPopup = document.querySelector('.buttonPost');
const hidePopup = document.querySelector('.closeButton');
const popup = document.querySelector('.createPost__row');

showPopup.addEventListener('click', function () {
    popup.classList.remove('none')
})

hidePopup.addEventListener('click', function () {
    popup.classList.add('none');
})

/* SHOW POPUP */

/* CHECK ARRAY OF POSTS */

function checkCountPostCard() {
    const noPostsTitle = document.querySelector('.noPosts');
    let postsData = JSON.parse(localStorage.getItem('posts')) || [];

    if (postsData.length === 0) {
        noPostsTitle.classList.remove('none');
    } else {
        noPostsTitle.classList.add('none')
    }
}

checkCountPostCard();


/* CHECK ARRAY OF POSTS */
