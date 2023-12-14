function counter1() {
    let i = 1;
    setInterval(function () {
        console.clear();
        console.log(i);
        i += 1;
    }, 1000);
}

counter1();