const url = "https://jsonplaceholder.typicode.com/users"

fetch (url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(err => console.log(err))

const mostrarData = (data) => {
    console.log(data)
    let body =` `
    for(let i = 0; i < data.length; i++){
        body += `<tr><th>${data[i].id}</th><th>${data[i].name}</th><th>${data[i].email}</th></tr>`
    } 

    document.getElementById("data").innerHTML = body;
}


