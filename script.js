const getTodos = () => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request, request.responseText)
        } else if(request.readyState === 4){
            console.log("Couldn't fetch the data")
        }

        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    });
}
getTodos();