let div =document.createElement('div');
div.id='maindiv';
div.className='div1';
//creating a text node
let str=document.createTextNode('this is demo');
//adding textnode to div

div.appendChild(str);


const heading=document.createElement('h1');
heading.innerText="Welcome to the page";
div.appendChild(heading);

document.body.appendChild(div);

const h1=document.createElement('h1');
h1.innerText='this is the list';
document.body.appendChild(h1);


let ul=document.createElement('ul');
ul.id='list1';
document.body.appendChild(ul);

let arr=["Home","Products","About Us","Contact us"];

let nodes = arr.map(
    e=>{
       let listitem =  document.createElement('li');
       listitem.textContent= e;
       return listitem;

    }

);
list1.append(...nodes);

ul.before(h1);
