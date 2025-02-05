# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript. The `add` function is defined to accept two number arguments and return their sum. However, the code attempts to call the function with string arguments, resulting in a type error.

## Bug

The bug lies in the incorrect usage of the `add` function.  The function is explicitly typed to only accept numbers, but strings are passed. TypeScript's type system correctly flags this as an error.

## Solution

The solution involves ensuring that only number arguments are passed to the `add` function. This could involve type checking before the function call or modifying the function to handle string arguments appropriately (e.g., by converting them to numbers if possible).

## How to Reproduce

1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Observe the compiler error.
4. Run the corrected code in `bugSolution.ts` to see the corrected output.