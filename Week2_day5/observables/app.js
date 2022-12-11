import {Observable} from 'rxjs';

const obs=new Observable(
    subscriber=>{
        subscriber.next(10);
        subscriber.next(20);
        subscriber.next(90);
        setTimeout(()=>{
            subscriber.next(89);
            subscriber.complete();
        },2000);
    
    });
    console.log('before subscription');
    obs.subscribe({
        next(i){console.log(i)},
        error(e){console.log(e)},
        complete(){console.log("all values are received")}
    })
    console.log('after subscrption');