import { test } from "node:test";
import assert from "node:assert/strict";
import { EXCUSES, listCategories, pickExcuse } from "./excuses.mjs";

test("every excuse has text, a category and a believability from 1 to 5", () => {
  for (const e of EXCUSES) {
    assert.ok(e.text.length > 0);
    assert.ok(e.category.length > 0);
    assert.ok(e.believability >= 1 && e.believability <= 5);
  }
});

test("listCategories returns each category once", () => {
  assert.deepEqual(listCategories(), ["brakes", "lights", "emissions"]);
});

test("pickExcuse uses the random function it is given", () => {
  assert.equal(pickExcuse(() => 0), EXCUSES[0]);
  assert.equal(pickExcuse(() => 0.999999), EXCUSES[EXCUSES.length - 1]);
});
