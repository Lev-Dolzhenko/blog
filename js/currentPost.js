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
const inputTitleThree = document.getElementById('titleThree');
const textareaDescription = document.querySelector('.post__inputs textarea');
const buttonPost = document.querySelector('.post__inputs button');

currPost.post = {};


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
                            let postTitleID = 'postTitleOne_' + Math.random().toString(36).substring(2, 9);
                            let title1 = document.createElement('h1');
                            title1.textContent = inputTitleOne.value;
                            title1.classList.add('titleStageOne');
                            postContent.appendChild(title1);
                            currPost.post[postTitleID] = inputTitleOne.value;

                            let currTitleOneString = JSON.stringify(currPost.post);
                            localStorage.setItem('post', currTitleOneString);
                            
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
                            let postTitleID = 'postTitleTwo_' + Math.random().toString(36).substring(2, 9);
                            let title2 = document.createElement('h2');
                            title2.textContent = inputTitleTwo.value;
                            title2.classList.add('titleStageTwo');
                            postContent.appendChild(title2);
                            currPost.post[postTitleID] = inputTitleTwo.value;

                            let currTitleTwoString = JSON.stringify(currPost.post);
                            localStorage.setItem('post', currTitleTwoString);

                            inputTitleTwo.value = '';
                            inputTitleTwo.classList.add('none');
                            buttonPost.classList.add('none');
                        }
                    })
                    break;
                case 'h3':
                    inputTitleThree.classList.remove('none');
                    buttonPost.classList.remove('none');
                    buttonPost.addEventListener('click', function () {
                        if (inputTitleThree.value.trim() !== '') {
                            let postTitleID = 'postTitleThree_' + Math.random().toString(36).substring(2, 9);
                            let title3 = document.createElement('h3');
                            title3.textContent = inputTitleThree.value;
                            title3.classList.add('titleStageThree');
                            postContent.appendChild(title3);
                            currPost.post[postTitleID] = inputTitleThree.value;

                            let currTitleThreeString = JSON.stringify(currPost.post);
                            localStorage.setItem('post', currTitleThreeString);

                            currPost.post[postTitleID] = inputTitleThree.value;
                            inputTitleThree.value = '';
                            inputTitleThree.classList.add('none');
                            buttonPost.classList.add('none');
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
                            currPost.post[postDescID] = textareaDescription.value;

                            let currTitleDescString = JSON.stringify(currPost.post);
                            localStorage.setItem('post', currTitleDescString);

                            currPost.post[postDescID] = textareaDescription.value;
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

/* LOAD LOCALSTORAGE */

function loadPost() {
    let post = JSON.parse(localStorage.getItem('post'));

    for (let key in post) {
        if (post.hasOwnProperty(key)) {
            let arrKey = key.split('_');
            let partKey = arrKey[0];
            if (partKey == 'postTitleOne') {
                let element = document.createElement('div');
                element.classList.add('titleStageOne')
                element.textContent = `${post[key]}`;
                postContent.appendChild(element);
            } else if (partKey == 'postTitleTwo') {
                let element = document.createElement('div');
                element.classList.add('titleStageTwo')
                element.textContent = `${post[key]}`;
                postContent.appendChild(element);
            } else if (partKey == 'postTitleThree') {
                let element = document.createElement('div');
                element.classList.add('titleStageThree')
                element.textContent = `${post[key]}`;
                postContent.appendChild(element);
            } else if (partKey == 'postDesc') {
                let element = document.createElement('div');
                element.classList.add('description')
                element.textContent = `${post[key]}`;
                postContent.appendChild(element);
            }
        }
    }
}

loadPost();

/* LOAD LOCALSTORAGE */

/* SAVE POST */

const saveButton = document.getElementById('save');
const buttonsFunc = document.querySelector('.post__row__functions');

saveButton.addEventListener('click', function() {
    postContent.classList.remove('post__row')
    postContent.classList.add('post__row--saved')
    buttonsFunc.classList.add('none')
    saveButton.classList.add('none');
    localStorage.setItem('savedContent', postContent.innerHTML);
    console.log(currPost);
})

window.onload = function() {
    if(localStorage.getItem('savedContent')) {
        postContent.innerHTML = localStorage.getItem('savedContent');
        postContent.classList.add('post__row--saved');
        buttonsFunc.classList.add('none');
        saveButton.classList.add('none');
    }
}


/* SAVE POST */