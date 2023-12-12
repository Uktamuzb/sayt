let commentId = 122;

fetch("https://JSonlaceholder.typicode.com/comments/"+ commentId)
.then(resp => resp.json())
.then(res => console.json(res))
