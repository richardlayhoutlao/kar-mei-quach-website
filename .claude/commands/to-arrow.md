---
description: Convert function declarations and function expressions to arrow functions in the current file
---

Convert all function declarations and function expressions in the current file to arrow functions. Follow these rules:

1. Convert `function name(params) { body }` declarations to `const name = (params) => { body }`
2. Convert `function(params) { body }` expressions (e.g. assigned to variables or passed as callbacks) to `(params) => { body }`
3. If the function body is a single return statement, use the concise body form: `(params) => expression` (omit the `return` keyword and braces)
4. For single-parameter arrow functions, keep parentheses around the parameter (do not remove them)
5. Do NOT convert methods inside class bodies or object literals — arrow functions change `this` binding and would break those
6. Do NOT convert functions that reference `this`, `arguments`, or are used as constructors (`new`)
7. Preserve all comments, types (TypeScript), and formatting otherwise unchanged
