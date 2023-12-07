/* LOAD CURRENT POST ON PAGE */

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

let posts = JSON.parse(localStorage.getItem('posts')) || [];

let currPost = posts.find((post) => post.id === postId);

/* LOAD CURRENT POST ON PAGE */

/* CREATING FUNCTIONS FOR PAGE */

const functionButtons = document.querySelectorAll('.post__buttons button');
const postContent = document.querySelector('.post__row');
const inputTitle = document.querySelector('.post__inputs input')
const textareaDescription = document.querySelector('.post__inputs textarea');
const buttonPost = document.querySelector('.post__inputs button');


function chooseFunction() {
    for (let i = 0; i < functionButtons.length; i++) {
        let currButton = functionButtons[i];
        currButton.addEventListener('click', function () {
            switch (currButton.name) {
                case 'h1':
                    inputTitle.classList.remove('none');
                    buttonPost.classList.remove('none');

                    buttonPost.addEventListener('click', function() {
                        let title1 = document.createElement('h1');
                        title1.textContent = inputTitle.value;
                        title1.classList.add('titleStageOne');
                        postContent.appendChild(title1);
                        inputTitle.value = '';
                    })
                    break;
                case 'h2':
                    console.log('h2')
                    break;
                case 'h3':
                    console.log('h3')
                    break;
                case 'p':
                    console.log('p')
                    break;
                case 'ul':
                    console.log('ul')
                    break;
                default:
                    break;
            }
        })
    }
}

chooseFunction()

/* CREATING FUNCTIONS FOR PAGE */

