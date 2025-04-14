❌ Bad Code:
```javascript
function sum(){ return a+b }
```

🔍 Issues:
* ❌ The function `sum` doesn't declare or define its parameters (`a` and `b`). This means the function relies on
variables `a` and `b` being defined in the surrounding scope (global or another function's scope). This is poor practice
and makes the function difficult to understand and reuse.
* ❌ There's no explicit indication of what `a` and `b` *should* be. Are they numbers? Strings? This lack of type
information makes the code brittle.
* ❌ The function lacks documentation. What is its purpose? What should it return?

✅ Recommended Fix:
```javascript
function sum(a, b) {
return a + b;
}
```

💡 Improvements:
* ✔ The function now explicitly defines `a` and `b` as parameters. This makes the function self-contained and
predictable.
* ✔ Assumed addition. For broader re-usability, consider validating a and b datatypes (e.g. using typeof) and throwing
an error if it's not a number.
* ✔ Adding JSDoc style comments would improve clarity even further (see example below).

```javascript
/**
* Calculates the sum of two numbers.
*
* @param {number} a The first number.
* @param {number} b The second number.
* @returns {number} The sum of a and b.
*/
function sum(a, b) {
return a + b;
}
```

Final Note:
Always strive for clarity and explicitness in your code. Defining parameters within the function signature makes the
code easier to understand, maintain, and reuse. Adding documentation further enhances its usability.