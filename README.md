# MOT excuse generator

A deliberately silly generator of excuses for failing an MOT. It is a small workshop demo for the GitHub Copilot cloud agent. All excuses are made up. None of them would be accepted by a real tester.

## Use it

```
npm test
```

```js
import { pickExcuse } from "./excuses.mjs";
console.log(pickExcuse().text);
```

## Files

- `excuses.mjs`: the excuse list, `listCategories()` and `pickExcuse()`.
- `excuses.test.mjs`: tests, run with Node's built-in test runner. No dependencies.
- `.github/copilot-instructions.md`: the house rules for Copilot.
