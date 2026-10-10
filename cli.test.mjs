import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { EXCUSES, listCategories } from "./excuses.mjs";

function runCli(args = []) {
  return spawnSync(process.execPath, [fileURLToPath(new URL("./cli.mjs", import.meta.url)), ...args], {
    encoding: "utf8",
  });
}

test("CLI prints one excuse from any category with no arguments", () => {
  const result = runCli();
  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.ok(EXCUSES.some((e) => result.stdout === `${e.text}\n`));
});

test("CLI prints one excuse from the requested category", () => {
  for (const category of listCategories()) {
    const result = runCli(["--category", category]);
    assert.equal(result.status, 0);
    assert.equal(result.stderr, "");
    assert.ok(EXCUSES.some((e) => e.category === category && result.stdout === `${e.text}\n`));
  }
});

test("CLI reports an unknown category on stderr and exits unsuccessfully", () => {
  const result = runCli(["--category", "tyres"]);
  assert.equal(result.status, 1);
  assert.equal(result.stdout, "");
  assert.equal(result.stderr, 'Unknown category "tyres". Valid categories: brakes, lights, emissions.\n');
});

test("CLI rejects missing category values and unsupported arguments", () => {
  for (const args of [["--category"], ["--unknown"], ["lights"]]) {
    const result = runCli(args);
    assert.equal(result.status, 1);
    assert.equal(result.stdout, "");
    assert.ok(result.stderr.trim().length > 0);
  }
});
