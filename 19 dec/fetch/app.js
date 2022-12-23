function getstudent() {

    fetch('student.json')
        .then((jdata => jdata.json()))
        .then(res => console.log(res))
        .catch(error => console.log(error));
}
getstudent();

let post1 ={
    
    title:"java",
    body:"is computer language",
    userId:90,
}


async function addpost(){
    let resp=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify(post1),
        headers:{"Content-type":"application/json;charset=UTF-8"}
        })
    let data=await resp.json();
    console.log(data);
}
addpost();
