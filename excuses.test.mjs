import { test } from "node:test";
import assert from "node:assert/strict";
import { EXCUSES, listCategories, pickExcuse, pickExcuseByCategory } from "./excuses.mjs";

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

test("pickExcuseByCategory selects within each category using the given random function", () => {
  for (const category of listCategories()) {
    const excuses = EXCUSES.filter((e) => e.category === category);
    for (let index = 0; index < excuses.length; index++) {
      assert.equal(pickExcuseByCategory(category, () => (index + 0.5) / excuses.length), excuses[index]);
    }
    assert.equal(pickExcuseByCategory(category, () => 0), excuses[0]);
    assert.equal(pickExcuseByCategory(category, () => 0.999999), excuses[excuses.length - 1]);
    assert.ok(excuses.includes(pickExcuseByCategory(category)));
  }
});

test("pickExcuseByCategory rejects unknown categories and lists valid categories", () => {
  for (const category of ["tyres", "", undefined]) {
    assert.throws(
      () => pickExcuseByCategory(category),
      { message: `Unknown category "${category}". Valid categories: brakes, lights, emissions.` },
    );
  }
});
