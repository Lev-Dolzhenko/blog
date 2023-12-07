const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');
console.log(postId);