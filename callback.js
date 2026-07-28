function register(cb) {
    setTimeout(() => {
        console.log("Register here");
        cb();
    }, 10000);
}

function login(cb) {
    setTimeout(() => {
        console.log("Login here");
        cb();
    }, 5000);
}

function getData(cb) {
    setTimeout(() => {
        console.log("Fetch data from DB");
        cb();
    }, 3000);
}

function displayData() {
    setTimeout(() => {
        console.log("Display data");
    }, 6000);
}

register(() => {
    login(() => {
        getData(() => {
            displayData();
        });
    });
});

console.log("Call Another Application");