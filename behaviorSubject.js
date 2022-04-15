document.body.append(Object.assign(document.createElement('p'),{innerHTML:"BehaviorSubject.js"}));

const { BehaviorSubject } = rxjs;

const behaviorSubject$ = new BehaviorSubject();
// const behaviorSubject$ = new BehaviorbehaviorSubject('CERO'); // init. default val

// subscriber 1
behaviorSubject$.subscribe((data) => {
    console.log('Subscriber A:', data);
});

behaviorSubject$.next('UNO');
behaviorSubject$.next('DOS');

// subscriber 2
behaviorSubject$.subscribe((data) => {
    console.log('Subscriber B:', data);
});

behaviorSubject$.next('TRES');

console.log(behaviorSubject$.value) //can print .value

// // output
// // Subscriber A: undefined
// // Subscriber A: UNO
// // Subscriber A: DOS
// // Subscriber B: DOS
// // Subscriber A: TRES
// // Subscriber B: TRES
// // TRES