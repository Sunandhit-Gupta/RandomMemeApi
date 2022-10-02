
async function getData(){
    url ="https://meme-api.herokuapp.com/gimme"
    response = await fetch(url);
    data = await response.json();
    return data;
}

function show(){
getData().then(data => {
    let ups = data.ups;
    let title = data.title;
    let author = data.author;
    let postLink = data.postLink;
    let subreddit = data.subreddit;
    let a = data.url;
    
    image = document.getElementById("ig");
    image.src = a;

    subrdt = document.getElementById("subreddit");
    subrdt.innerHTML = "Subreddit : "+subreddit;

    lkno = document.getElementById("lkno");
    lkno.innerHTML = "Likes : "+ ups;

    ather = document.getElementById("author");
    ather.innerHTML = author;

    tile = document.getElementById("title");
    tile.innerHTML =  title;

    anchorpost=document.getElementById("anchorpost");
    anchorpost.href = postLink;   
})
}
show();
