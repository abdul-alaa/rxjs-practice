import Rx from 'rxjs/Rx';

const print = text => {
  const el = document.createElement('p');
  el.innerText = text;
  document.body.appendChild(el);
};
const observer = RX.Observable.create(ob => {
  ob.next('hello');
  ob.next('hello');
});

observer.subscribe(data => {
  print(data);
});
