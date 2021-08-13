
const observable = rxjs.Observable.create((obs)=>{
obs.next('Hi')
obs.next('Bodda')
});
observable.subscribe(alert)