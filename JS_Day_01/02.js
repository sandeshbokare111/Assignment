let number = prompt("enter the number to reverse")
let reverse = 0;
while (number!=0){
    reminder = number%10;
    reverse = (reverse*10)+reminder;
    number = Math.floor(number/10);
}
console.log(reverse);
