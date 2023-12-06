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
const createPostButton = document.getElementById('createPost');

const listPosts = document.querySelector('.posts__row ul');

let editButtonAll;

createPostButton.addEventListener('click', function (event) {
    event.preventDefault();
    createPost(inputTitle.value, inputDescription.value);
    editButtonAll = document.querySelectorAll('.posts__row ul li button');
    console.log(editButtonAll)
})
function createPost(title, description) {
    listPosts.innerHTML +=
        `
        <li>
        <h5>EDIT</h5>
        <img src="/img/posts/postOne.jpg" alt="First post">
        <div class="post__info">
            <h4>${title}</h4>
            <time datetime="2024-05-24T12:00:00Z">${time()} of year</time>
            <p>
            ${description}
            </p>
        </div>
    </li>
    `
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
            title.removeAttribute('contentEditable');
            description.removeAttribute('contentEditable');
            buttonFlag.textContent = 'EDIT';
        }
        else {
            title.setAttribute('contentEditable', true);
            description.setAttribute('contentEditable', true);
            buttonFlag.textContent = 'SAVE';
        }
    }
    editMode = !editMode;
});


/* EDIT POST */