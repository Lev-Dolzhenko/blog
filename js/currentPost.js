/* LOAD CURRENT POST ON PAGE */

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

let posts = JSON.parse(localStorage.getItem('posts')) || [];

let currPost = posts.find((post) => post.id === postId);

console.log(currPost);
/* LOAD CURRENT POST ON PAGE */

console.log(currPost);

const functionButtons = document.querySelectorAll('.post__buttons button');

const postContent = document.querySelector('.post__row');
const inputTitleOne = document.getElementById('titleOne');
const inputTitleTwo = document.getElementById('titleTwo');
const inputTitleThree = document.getElementById('titleThree');
const textareaDescription = document.querySelector('.post__inputs textarea');
const buttonPost = document.querySelector('.post__inputs button');

const savePost = document.getElementById('save');

// const saveInput = document.querySelector('.post__inputs button')
// const buttonH1 = document.getElementById('post__h1');
// const inputH1 = document.getElementById('titleOne');

// buttonH1.addEventListener('click', function () {
//     saveInput.classList.remove('none')
//     inputH1.classList.remove('none');
// })

buttonPost.addEventListener('click', function () {
    let postTitleID = 'postTitleOne_' + Math.random().toString(36).substring(2, 9);
    currPost.post[postTitleID] = inputTitleOne.value;
})

// savePost.addEventListener('click', function () {
//     // Находим индекс вашего поста в массиве posts
//     const index = posts.findIndex((post) => post.id === postId);
//     // Изменяем текущий пост
//     posts[index] = currPost;
//     // Перезаписываем измененный массив в localStorage
//     localStorage.setItem('posts', JSON.stringify(posts));
// })

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

                            // Находим индекс вашего поста в массиве posts
                            const index = posts.findIndex((post) => post.id === postId);
                            // Изменяем текущий пост
                            posts[index] = currPost;
                            // Перезаписываем измененный массив в localStorage
                            localStorage.setItem('posts', JSON.stringify(posts));

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

                            // Находим индекс вашего поста в массиве posts
                            const index = posts.findIndex((post) => post.id === postId);
                            // Изменяем текущий пост
                            posts[index] = currPost;
                            // Перезаписываем измененный массив в localStorage
                            localStorage.setItem('posts', JSON.stringify(posts));

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

                            // Находим индекс вашего поста в массиве posts
                            const index = posts.findIndex((post) => post.id === postId);
                            // Изменяем текущий пост
                            posts[index] = currPost;
                            // Перезаписываем измененный массив в localStorage
                            localStorage.setItem('posts', JSON.stringify(posts));

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

                            // Находим индекс вашего поста в массиве posts
                            const index = posts.findIndex((post) => post.id === postId);
                            // Изменяем текущий пост
                            posts[index] = currPost;
                            // Перезаписываем измененный массив в localStorage
                            localStorage.setItem('posts', JSON.stringify(posts));

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

const saveButton = document.getElementById('save');
const buttonsFunc = document.querySelector('.post__row__functions');

saveButton.addEventListener('click', function () {
    postContent.classList.remove('post__row')
    postContent.classList.add('post__row--saved')
    buttonsFunc.classList.add('none')
    saveButton.classList.add('none');
    localStorage.setItem('savedContent', postContent.innerHTML);
    console.log(currPost);
})

// window.onload = function () {
//     if (localStorage.getItem('savedContent')) {
//         postContent.innerHTML = localStorage.getItem('savedContent');
//         postContent.classList.add('post__row--saved');
//         buttonsFunc.classList.add('none');
//         saveButton.classList.add('none');
//     }
// }

window.onload = function () {
    const index = posts.findIndex((post) => post.id === postId);
    posts[index] = currPost;
    console.log(posts[index])
    for (let key in posts[index].post) {
        if (posts[index].post.hasOwnProperty(key)) {
            console.log(key, posts[index].post[key]);
            postContent.innerHTML += posts[index].post[key];
        }
    }
}

