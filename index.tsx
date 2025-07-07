// find the largest of three numbers(a,b,c)
const findLargest = (a:number,b:number,c:number):number =>{
    return Math.max(a,b,c);
};
console.log("Largest of (5,8,3):",findLargest(5,8,3));

// find out whether a number is even or odd
const isEvenOrOdd = (n:number):string =>{
    return n%2 ===0? "Even" : "Odd";

}
console.log(isEvenOrOdd(4))