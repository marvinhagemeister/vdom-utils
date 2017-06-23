import { assert as t } from "chai";
import { escape, padStart } from "../index";

describe("escape", () => {
  it("should escape everything", () => {
    t.equal(escape("a123<7&2\"'>"), "a123&lt;7&amp;2&quot;&#39;&gt;");
    t.equal(escape(1), "1");
    t.equal(escape(true), "true");
  });
});

describe("pad", () => {
  it("should pad string", () => {
    t.equal(padStart("foo", 2), "  foo");
    t.equal(padStart("foo", 0), "foo");
    t.equal(padStart("foo", 18), "                  foo");
  });
});
