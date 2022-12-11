let p=new Promise((study,play)=>{
    let movies=false;
    let coding=true;

    if(coding)
        study("studying");
    else
        play("playing");

    
});
//then is for success and catch is for reject

p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)});