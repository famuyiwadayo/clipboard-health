# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Too much nested branches can reduce a reader's ability to understand the essence of a block of code, which is why I used a shorter version of Javascript's branching which allows for more readability and allows the user to quickly grasp the intention of the programmer. The function to generate a SHA3-512 hash is been called in multiple places within the code, which I abstracted away into it's own function, this allows the reader to focus more on the specifics of the code, it also allows the reader to skip the `generateSha512Hash` function call since it was named after it's use within the code, which also allows them to come back to it later. I also use the `!!` operator to convert a variable into a `true | false`, this is to guarantee that the value in that variable is properly checked, then the `?` for null-safety.
