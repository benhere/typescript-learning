
## TS Notes

# Official TypeScript Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

# Section 2 - TS Basics & Basic Types

# Note - Typescript's type system only helps you during development (i.e beofre the code gets compiled).

# The key difference between JS and TS is that JS uses "dynamic types" (resolved at runtime), where as TS uses "static types" (set during development).

# Note - Often, we shall see enums with all-uppercase values but that's not must-do. We can go with any value names.

# 'unknown' is bit more restrictive than any.

# 'unknown' type is better than 'any' type because it makes sure that you are not allowed to do everything by you have some type checking.

# difference between 'unknown' and 'any' type


# In TypeScript, the unknown and any types are both used to represent values of any type. However, there are important differences between them, especially in terms of type safety.

a). Type Safety:

# any: Using any essentially opts out of type checking for that particular variable. It allows you to perform any operation on it without TypeScript raising any type-related errors. This flexibility comes at the cost of losing type safety.

# unknown: On the other hand, unknown is safer than any. When a variable is of type unknown, TypeScript doesn't allow you to perform operations on it without first narrowing down its type through type-checking mechanisms. You need to explicitly assert or narrow the type before using it in a way that could cause type errors.

b). Type Inference:

# any: Variables of type any can be assigned to other variables without any type-checking. This can lead to unintended consequences and makes it easier to introduce bugs.

# unknown: Variables of type unknown require you to perform type-checks or assertions before using them, promoting more cautious and type-safe coding practices.

c). Type Compatibility:

# any: The any type is compatible with all other types, allowing you to assign and use it without restriction.

# unknown: The unknown type is more restrictive. You need to narrow down the type using type-checks before using it in certain ways.

# In summary, while both any and unknown provide flexibility for working with values of any type, unknown encourages more careful and type-safe coding practices by requiring explicit type-checking before certain operations. Use unknown when you need the flexibility of an untyped value but want to maintain better type safety.


# differnce between 'void' and 'never' type

# In TypeScript, `void` and `never` are both used to represent the absence of a value, but they have different use cases and meanings.

1. **`void` Type:**
   - **Usage:** The `void` type is used to indicate that a function does not return any value.
   - **Commonly Used With:** It is commonly used as the return type of functions that perform an action but don't produce a meaningful result.

   - **Example:**
     ```typescript
     function logMessage(message: string): void {
         console.log(message);
     }
     ```
   - **Note:** Variables can also be assigned a value of `undefined` when their type is explicitly set to `void`.

2. **`never` Type:**
   - **Usage:** The `never` type is used to represent values that will never occur. It is typically used as the return type of functions that throw exceptions, enter infinite loops, or never reach the end.
   - **Commonly Used With:** It is used when a function will never complete normally or when a value will never be assigned.
   - **Example:**
   `
     ```typescript
     function throwError(message: string): never {
         throw new Error(message);
     }

     function infiniteLoop(): never {
         while (true) {
             // code that never exits
         }
     }
     ```
   - **Note:** `never` is also inferred for functions that have unconditional throw statements or infinite loops.

# In summary:

- Use `void` when a function does not return any value or when you want to explicitly indicate that a variable can hold `undefined`.

- Use `never` when a function will never complete normally, for example, due to throwing an exception or entering an infinite loop. `never` is also used when a variable is expected to never have a value.

Here's a quick example to illustrate the difference:

```typescript
`
let resultVoid: void = undefined; // Valid
let resultNever: never = throwError("An error occurred"); // Valid
`

// Error: 'never' is not assignable to 'void'
let voidToNever: void = resultNever; 
```

# Section 3 - The Typescript Compiler and its configuration



