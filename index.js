
async function getData(){
    url ="https://meme-api.herokuapp.com/gimme"
    response = await fetch(url);
    data = await response.json();
    return data;
}

function show(){
getData().then(data => {
    let a = data.url;
    element = document.getElementById("ig");
    element.src = a ;
})
}
show();
