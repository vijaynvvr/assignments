function clock24() {
    let i = 1;
    setInterval(function () {
        console.clear();
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        console.log(`${hour}:${minute}:${second}`);
        i += 1;
    }, 1000);
}

function clock12() {
    let i = 1;
    setInterval(function () {
        console.clear();
        const date = new Date();
        let hour = date.getHours();
        let ext = 'AM'; 
        if (hour == 0 || hour == 12) {
            hour = 12;
            if (hour == 12) ext = 'PM';
        }
        else if (hour > 12) {
            hour = date.getHours()%12;
            ext = 'PM';
        }
        const minute = date.getMinutes();
        const second = date.getSeconds();
        console.log(`${hour}:${minute}:${second} ${ext}`);
        i += 1;
    }, 1000);
}

clock12();