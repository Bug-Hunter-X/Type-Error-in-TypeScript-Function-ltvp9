function add(a: number, b: number): number {
  return a + b;
}

let num1: number = 10;
let num2: number = 5;

let result = add(num1, num2); // Correct usage
console.log(result); // Output: 15

function addStrings(a: string, b: string): string {
    return a + b;
}

let stringResult = addStrings("hello", "world");
console.log(stringResult); // Output: helloworld