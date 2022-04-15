document.body.append(Object.assign(document.createElement('p'),{innerHTML:"ReplaySubject.js"}));

const { ReplaySubject } = rxjs;

const replaySubject$ = new ReplaySubject(2); // <-- stores last 2 values 

// subscriber 1
replaySubject$.subscribe((data) => {
    console.log('Subscriber A:', data);
});

replaySubject$.next('UNO')
replaySubject$.next('DOS')
replaySubject$.next('TRES')

// subscriber 2
replaySubject$.subscribe((data) => {
    console.log('Subscriber B:', data);
});

replaySubject$.next('CUATRO');

console.log(replaySubject$.value); // <-- unlike behaviorSubject no .value


// // output
// // Subscriber A: UNO
// // Subscriber A: DOS
// // Subscriber A: TRES
// // Subscriber B: DOS       <-- passes only last 2 values to B
// // Subscriber B: TRES
// // Subscriber A: CUATRO   <--- synced
// // Subscriber B: CUATRO
// // undefined