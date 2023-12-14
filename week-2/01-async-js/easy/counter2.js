// 1:
// function counter2(i) {
//     console.clear();
//     console.log(i);
//     let a = 1;
//     for (let i = 0; i < 1000000000; i++) a++;
//     counter2(++i);
// }
// counter2(1);

// 2:
function counter(i) {
    console.clear();
    setTimeout(() => {
        console.log(i);
        counter(++i);
    }, 1000);
}
counter(1);


let count = 0;

function incrementCounter() {
    console.clear();
    count++;
    console.log(count);
    setTimeout(incrementCounter, 1000); // Call incrementCounter again after 1 second
}

// Start the counter
// incrementCounter();


// 3:
// let i = 1;
// while (true) {
//     setTimeout(() => {
//         console.clear();
//         console.log(i);
//     }, 1000);
//     i++;
// }