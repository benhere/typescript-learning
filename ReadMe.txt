
## TS Notes

# Official TypeScript Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

# Section 2 - TS Basics & Basic Types

# Note - Typescript's type system only helps you during development (i.e beofre the code gets compiled).

# The key difference between JS and TS is that JS uses "dynamic types" (resolved at runtime), where as TS uses "static types" (set during development).

# Note - Often, we shall see enums with all-uppercase values but that's not must-do. We can go with any value names.

# 'unknown' is bit more restrictive than any.

# 'unknown' type is better than 'any' type because it makes sure that you are not allowed to do everything by you and have some type checking.

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

# use of command `tsc --init`

# this command tells typescript that everything in the folder where we are running this command is managed by typescript and hence it will create a `tsconfig.json` file. This file is basically the indicator for typescript that the project in which this file lies and all sub folders of the current folder should be managed by typescript.

# significance of  `lib` option in `tsconfig.json` file - It is the `lib` option that let us use DOM API in TS. `lib' option is further depend on `target` option. By default `lib` option is commented so that TS compiler assumes some default libraries i.e some default type definitions.

# `sourceMap` option - this helps us with debugging and development. By using this option we can compile TS files in browser's source tab.

# when we uncomment `sourceMap` to true, it will generate .map file which acts a bridge which is understood by modern browsers and developer tools.

# Most often we used to write TS codes in `src` folder and its corresponding compiled `js` file reside into `dist` folder.


# By uncommenting `outDir` option , we can tell the TS compiler that where the compiled `js` file should be stored and that is `dist` folder.

# when `"noImplicitAny": true,` --> this option ensures that we have to be clear about values we're working with in our code. In this case we don't give Typescript any information about type of data.

# Note - If we declare variable of `any` type then TS compiler will not show any error in code and but in case of function declaration if we pass any parameter of `any` type then it show error in code. This is because TS is able to track the value we assign to variables.

# By using Chrome extension from VS Code Editor and `sourceMap` option from tsconfig file we can debug TS code inside VS Code Editor.

# Section-4 : Next-generation Typescript and Javascript

# `let` & `const` introduced a new concept called block scope which means variable or constant always available in the block in which you define it or any lower blocks. Both forced us to write cleaner code.

#Note - default arguments in function have to be last in the list, if we try to assign default argument to first argument, we will run into issues. This is because default arguments are not skipped when we call a function. So, TS and JS do not look at the function definition and guess that you probably wanna skip the default argument and provide your value to the non-default one. Instead , it simply adheres to the order and hence we should set default arguments from the right.

# Note - TypeScript compiles the JS code not just from TypeScript only features to Regular JS, but all of them from Modern JS to old JS. If tell TS to do so.

# Section-5 : Classes & Interfaces

# Vanilla JS private field syntax also does not use the 'private' and 'public' keywords.

# Singletons & Private Constrctors

# There is a pattern in a object oriented programming which is called the singleton pattern which ensures that we should always have exactly one instance of a certain class. This can be useful in scenario where we somehow can't use static methods or properties or we don't want to but the same time we want to make sure that we can't create multiple objects based on a class but we always have exactly one object on a class.

# Interface - An interface describes the structure of an object. We can use it to describe how an object should look like.

# Interface allows us to define the structure of an object. We can use it as atype to type check for objects that must have this structure.

# difference betweeen interface & type :-

# One major difference is that interfaces can only be used to describe the strcture of an object, we can use 'type' alias for that as well but instead of custom type we can also store other things like union types and so on.

# When we define something as an interface, it's super clear that we want to define the strcture of an object with that.

# When it comes to define object types, we often see interfaces out there in the while then we see custom types.

# Note - The reason why we often work with interface is that it can be used as a contract a class can implement and a class then has to adhere to.

# Note - There is no translation for interfaces. Javascript doesn't know about this feature. It's pure TS feature that is only available during development and compilation.

# Section-6 : Advanced Types

# intersection types in TS allow us to combine other types.

# In TS, type guard is just a term that describes the idea or approach of checking if a certain property or method exists before you try to use it.

# Note - For objects, we use type guard using 'instanceof' or with 'in'. For other types, we can use typeof.

# Descriminated Union :- It's pattern which we can use when working with union types that makes implementing type guards easier. It is available when we work with object types.

# There are two ways of typecasting in TS

1). using angular bracket (<>) to specify the types.

2). using 'as' keyword 

# '!' --> this exclamation mark allows us to tell TS that the expression in front of it will never yield null.

# Index properties :- It is a feature that allows us to create objects which are more flexible regarding the properties they might hold.