function register(){
    waitfordelay(1000)
    console.log("register here");
}
function login(){
    waitfordelay(2000);
    console.log("login here");
}
function getData(){
    waitfordelay(3000);
    console.log("Fetch data from DB");
}
function displayData(){
    waitfordelay(6000);
    console.log("display data");
}

function waitfordelay(delay){
    const mt = Date.now()+delay;

    while(Date.now()<mt){

    }
}
register();
login();getData();
displayData();

console.log("call Another application")