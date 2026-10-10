# MOT excuse generator

A deliberately silly generator of excuses for failing an MOT. It is a small workshop demo for the GitHub Copilot cloud agent. All excuses are made up. None of them would be accepted by a real tester.

## Use it

With Node.js 18 or later, no dependency installation is needed:

```sh
node cli.mjs
node cli.mjs --category lights
```

The CLI prints one excuse. Valid categories are `brakes`, `lights` and `emissions`.
An unknown category prints an error listing the valid categories to stderr and exits with status 1.

Run the tests:

```
npm test
```

```js
import { pickExcuse, pickExcuseByCategory } from "./excuses.mjs";
console.log(pickExcuse().text);
console.log(pickExcuseByCategory("lights").text);
```

`pickExcuseByCategory(category, random = Math.random)` returns an excuse object from
the named category and throws an error listing valid categories if it is unknown.

## Files

- `excuses.mjs`: the excuse list, `listCategories()`, `pickExcuse()` and `pickExcuseByCategory()`.
- `cli.mjs`: the command-line entry point.
- `excuses.test.mjs` and `cli.test.mjs`: tests, run with Node's built-in test runner. No dependencies.
- `.github/copilot-instructions.md`: the house rules for Copilot.
