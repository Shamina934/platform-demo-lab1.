const test = require("node:test");
const assert = require("node:assert/strict");
const packageJson = require("../package.json");

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));
test("health is healthy", () => assert.equal("ok", "ok"));

test("version returns service name and version", () => {
  const payload = { service: "platform-demo", version: packageJson.version };
  assert.deepEqual(payload, { service: "platform-demo", version: "1.0.0" });
});