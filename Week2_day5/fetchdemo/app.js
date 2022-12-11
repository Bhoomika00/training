//json holder site.
//fetch(url).then().catch() ---multiple then() can be there.
/* ś */
/* async function fetch(){
    let resp=await fetch(url);
    let data=await.response.json();
    console.log()ś
} */

fetch("https://jsonplaceholder.typicode.com/users/2")
.then((jdata=> jdata.json()))
.then(res=> console.log(res))
.catch(error=> console.log(error));

async function fetch2(){
    let resp=await fetch("https://jsonplaceholder.typicode.com/users");
    let data=await resp.json();
    console.log(data);
}
fetch2();

//Post data
let post1 ={
    
    title:"java",
    body:"is computer language",
    userId:90,
}

let post2 ={
    
    title:"C++",
    body:"is computer language",
    userId:90,
}
fetch("https://jsonplaceholder.typicode.com/posts",{
method:"POST",
body:JSON.stringify(post1),
headers:{"Content-type":"application/json;charset=UTF-8"}
})
.then((jdata=> jdata.json()))
.then(res=> console.log(res))
.catch(error=> console.log(error));

async function fetchpost(){
    let resp=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify(post2),
        headers:{"Content-type":"application/json;charset=UTF-8"}
        })
    let data=await resp.json();
    console.log(data);
}
fetchpost();



