function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("li",ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData('li');
    ev.target.appendChild(document.getElementById(data));
}