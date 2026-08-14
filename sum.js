function sum(...num) {
const sum = num.reduce((s,i)=> (s+i));
return sum;
}

function add(...num){
let total = 0;
for(let i = 0 ; i< num.length ; i++){
    total += num[i];
}
return total;
}

export  {sum,add}; 