
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

# Useful Resources & Links
# Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

# These links might also be interesting:

# Official TypeScript Docs: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

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

# Useful Resources & Links
# Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

# These links might also be interesting:

# tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

# Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html

# VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

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

# Useful Resources & Links
# Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

# These links might also be interesting:

# More on (JS) Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

# More on TS Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html

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

# Nullish Coalescing (??) - It helps us deal with nullish (null) data.

# Useful Resources & Links
# Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

# These links might also be interesting:

# More on Advanced Types: https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

# Section-7 : Generics

# A generic type is a type which is kind of connected with some other type and is really flexible regarding which exact type that other type is.

# Example of Buit-in Generics - array, promise

# Partial type - It wraps our own type and change it to type where all these properties are optional.

# Note - Generic types are great if we want to lock in certain type. Use the same type throughout the entire class instance we create, use the same type throughout the entire function. That's where we want the generic type. We should use union type when we are flexible to have a different type with every method call, with every function call.

# Useful Resources & Links
# Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

# These links might also be interesting:

# More on Generics: https://www.typescriptlang.org/docs/handbook/generics.html

# Section-8 : Decorators

# In TypeScript, decorators are a feature that allows you to add metadata or behavior to classes, methods, properties, or parameters in a concise and expressive way. Decorators are a form of metaprogramming, enabling you to modify the behavior of classes and their members at design time.

# Decorators are prefixed with an `@` symbol and are applied to declarations using the following syntax:

```typescript
@decorator
class MyClass {
    @decorator
    myMethod() {}

    @decorator
    myProperty: string;
}
```

# Decorators can be used for various purposes, such as:

1). **Annotation:** You can use decorators to add metadata to classes, methods, or properties. This metadata can be accessed and utilized at runtime or compile time for various purposes like validation, serialization, or dependency injection.

2). **Aspect-Oriented Programming (AOP):** Decorators enable you to separate cross-cutting concerns such as logging, caching, or authorization from the main logic of your application. By applying decorators to methods or classes, you can add behavior to them without modifying their original code.

3). **Dependency Injection (DI):** In frameworks like Angular, decorators are extensively used for dependency injection. You can mark classes or constructor parameters with decorators to indicate their dependencies, which are then resolved and injected by the framework.

4). **Validation:** Decorators can be used to add validation logic to properties or methods. For example, you can create decorators to enforce data validation rules before executing a method or assigning a value to a property.

5). **Memoization:** Decorators can be used to implement memoization, where the result of a function call is cached based on its arguments. Subsequent calls with the same arguments can then return the cached result instead of re-executing the function.

# It's important to note that decorators are an experimental feature in JavaScript and TypeScript and are subject to change. They are currently part of the ECMAScript proposal and are widely used in TypeScript frameworks like Angular. However, their usage and behavior may evolve over time as the proposal progresses.

# Decorators execute when your class is defined not when it is instantiated. We don't need to instantiate class at all. So, decorators run when JavaScript finds your class definition, your constructor definition and not when we use that constructor function to instantiate an object.

# We can also define a decorator factory which basically returns a decorator function that allows us to configure it when we assign it as a decorator to something.

# Decorator is just a function that executes when the class is defined, when the method therefore is registered.

# Decorators are adding extra functionality behind the scenes which then sometimes can execute when you do something with your class or with your method, but which can also do totally different things.

# More on Decorators: https://www.typescriptlang.org/docs/handbook/decorators.html

# To write a modular code, we used to split our codes into multiple files, instead of storing it into single file so that each file on its own stays manageable and maintainable and then we simply import and export from and to these files to make sure that all these files are connected.

# Two options to organize code in multiple files :-
1). Namespace and File Bundling &
2). ES6 Imports /Exports

# Namespace - Namespace is a TS feature, syntax feature where we can add special code to our code to use this feature and it allow us to group code together below namespace and import namespaces into other files.

# File Bundling - TS also bundle files together into one file so that we write code in multiple files (which are compiled) but they are then imported into each other so that we have less imports to manage.

# We still have some diaadvantages of Namespace and ES6 Imports /Exports because every file we are depending on needs to be downloaded separately which means more HTTP requests and so on and there we can bundle files together and to work on multiple files during development but ship a single file for production but we need third party tools for this. For example - Webpack

# Note - If we are working with third party libraries in TS (like loadash which is written in JS ), we need to install '@types' package.

# In TypeScript, a class transformer is a tool or library used to transform or manipulate TypeScript classes at runtime. These transformations could involve creating new classes, modifying existing ones, or applying decorators dynamically.

# One popular library for class transformation in TypeScript is class-transformer. This library provides decorators to transform plain JavaScript objects into class instances and vice versa. It's commonly used when working with data serialization and deserialization, such as when handling JSON data in web applications.

# Github link - https://github.com/typestack/class-transformer?tab=readme-ov-file#what-is-class-transformer

# class-validator - It is a decorator-based property validation for classes. This package allow us to add validation rules with the help of some decorators inside of class

# class-validator - https://github.com/typestack/class-validator?tab=readme-ov-file#class-validator


