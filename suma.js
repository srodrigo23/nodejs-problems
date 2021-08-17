const readline = require("readline");
const { exit } = require("process");

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,   
})

let c = 0;

r.on("line", (line) => {
   let nums = line.split(" ")
   console.log(parseInt(nums[0]) + parseInt(nums[1]));
   
})