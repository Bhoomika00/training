let btn=document.getElementById('btn');

btn.addEventListener('click',loaddata);

function loaddata(){
     const xhr=new XMLHttpRequest();

     xhr.open('GET','data.txt',true);

     xhr.onprogress=function(){
         console.log('on progress',xhr.readyState);
     }

     xhr.onload=function(){
         console.log('on loading',xhr.readyState);
         if(xhr.status==200){
             document.getElementById('output').innerHTML=
             `<h1>${this.responseText}</h1>`;
         }

         
         //xhr.send();
     }
     xhr.onerror=function(){
        console.log('request has error');
    }
    xhr.send();
}