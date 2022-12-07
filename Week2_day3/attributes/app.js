let maindiv = document.getElementById("maindiv");
let classNames =  maindiv.classList;

//maindiv.classList.add('secondcls');
maindiv.className+='center'

flag=false;

function butclick(){
if(!flag){
    maindiv.className+='bg-green';
    maindiv.style.background='green';
    flag=true;
}
else{
    maindiv.classList.remove("bg-green");
    maindiv.style.background='white';
    flag=false;
}


}

console.log(classNames);

//maindiv.classList.add('secondcls');