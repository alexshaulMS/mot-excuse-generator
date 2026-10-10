import { parseArgs } from "node:util";
import { pickExcuse, pickExcuseByCategory } from "./excuses.mjs";

try {
  const { values } = parseArgs({
    options: { category: { type: "string" } },
  });
  const excuse = values.category === undefined
    ? pickExcuse()
    : pickExcuseByCategory(values.category);
  console.log(excuse.text);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
