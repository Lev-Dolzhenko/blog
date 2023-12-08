/* LOAD CURRENT POST ON PAGE */

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

let posts = JSON.parse(localStorage.getItem('posts')) || [];

let currPost = posts.find((post) => post.id === postId);

/* LOAD CURRENT POST ON PAGE */

/* CREATING FUNCTIONS FOR PAGE */

const functionButtons = document.querySelectorAll('.post__buttons button');
const postContent = document.querySelector('.post__row');
const inputTitleOne = document.getElementById('titleOne');
const inputTitleTwo = document.getElementById('titleTwo');
const textareaDescription = document.querySelector('.post__inputs textarea');
const buttonPost = document.querySelector('.post__inputs button');

currPost.titleOne = {};
currPost.titleTwo = {};
currPost.titleThree = {};
currPost.description = {};

function chooseFunction() {
    for (let i = 0; i < functionButtons.length; i++) {
        let currButton = functionButtons[i];
        currButton.addEventListener('click', function () {
            switch (currButton.name) {
                case 'h1':
                    inputTitleOne.classList.remove('none');
                    buttonPost.classList.remove('none');
                    buttonPost.addEventListener('click', function () {
                        if (inputTitleOne.value.trim() !== '') {
                            let postTitleID = 'postTitle_' + Math.random().toString(36).substring(2, 9);
                            let title1 = document.createElement('h1');
                            title1.textContent = inputTitleOne.value;
                            title1.classList.add('titleStageOne');
                            postContent.appendChild(title1);
                            currPost.titleOne[postTitleID] = inputTitleOne.value;

                            let currTitleOneString = JSON.stringify(currPost.titleOne);
                            localStorage.setItem('currTitleOne', currTitleOneString);

                            inputTitleOne.value = '';
                            inputTitleOne.classList.add('none');
                            buttonPost.classList.add('none');
                        }
                    })
                    break;
                case 'h2':
                    inputTitleTwo.classList.remove('none');
                    buttonPost.classList.remove('none');
                    buttonPost.addEventListener('click', function () {
                        if (inputTitleTwo.value.trim() !== '') {
                            let postTitleID = 'postTitle_' + Math.random().toString(36).substring(2, 9);
                            let title2 = document.createElement('h2');
                            title2.textContent = inputTitleTwo.value;
                            title2.classList.add('titleStageTwo');
                            postContent.appendChild(title2);
                            currPost.titleTwo[postTitleID] = inputTitleTwo.value;

                            let currTitleTwoString = JSON.stringify(currPost.titleTwo);
                            localStorage.setItem('currTitleTwo', currTitleTwoString);

                            inputTitleTwo.value = '';
                            inputTitleTwo.classList.add('none');
                            buttonPost.classList.add('none');
                        }
                    })
                    break;
                case 'h3':
                    inputTitle.classList.remove('none');
                    buttonPost.classList.remove('none');
                    buttonPost.addEventListener('click', function () {
                        if (inputTitleThree.value.trim() !== '') {
                        let postTitleID = 'postTitle_' + Math.random().toString(36).substring(2, 9);
                        let title3 = document.createElement('h3');
                        title3.textContent = inputTitle.value;
                        title3.classList.add('titleStageThree');
                        postContent.appendChild(title3);
                        currPost.titleThree[postTitleID] = inputTitle.value;
                        inputTitle.value = '';
                        }
                    })
                    break;
                case 'p':
                    textareaDescription.classList.remove('none');
                    buttonPost.classList.remove('none');
                    buttonPost.addEventListener('click', function () {
                        if (textareaDescription.value.trim() !== '') {
                        let postDescID = 'postDesc_' + Math.random().toString(36).substring(2, 9);
                        let description = document.createElement('p');
                        description.textContent = textareaDescription.value;
                        description.classList.add('description');
                        postContent.appendChild(description);
                        currPost.description[postDescID] = textareaDescription.value;
                        textareaDescription.value = '';
                        }
                    })
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

