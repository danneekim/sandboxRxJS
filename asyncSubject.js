document.body.append(Object.assign(document.createElement('p'),{innerHTML:"AsyncSubject.js"}));

const { AsyncSubject } = rxjs;

const asyncSubject$ = new AsyncSubject();
// subscriber 1
asyncSubject$.subscribe((data) => {
    console.log('Subscriber A:', data);
});

asyncSubject$.next('UNO');
asyncSubject$.next('DOS');
// asyncSubject$.complete(); // <-- req. to emit value
asyncSubject$.next('TRES');

// subscriber 2
asyncSubject$.subscribe((data) => {
    console.log('Subscriber B:', data);
});

asyncSubject$.next('CUATRO');
asyncSubject$.complete(); // <-- req. to emit value

// // output
// // Subscriber A: 'CUATRO'
// // Subscriber B: 'CUATRO'