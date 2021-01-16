fetch ("http://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((users) => {
    users.forEach(element => {
         document.body.innerHTML += `<h3>${element.title}</h3>`;
         document.body.innerHTML += `<p>${element.completed}</p>`;
    });
})
.catch((err) => {
    console.log(err);
})