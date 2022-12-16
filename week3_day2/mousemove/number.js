function numCheck(key)
{

//var keyCode = event.keyCode;


 if ((key <='9' )&&(key>='0') || (key==='+')||(key===')')||(key==='('))
event.returnValue = true;

else event.returnValue = false;
}

function show(){
 let number=document.getElementById('number');
 alert(number.value);
}