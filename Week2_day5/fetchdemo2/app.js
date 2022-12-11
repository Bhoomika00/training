function getposts(){

fetch('post.json')
.then((jdata=> jdata.json()))
.then(res=>console.log(res))
.catch(error=> console.log(error));
}
getposts();