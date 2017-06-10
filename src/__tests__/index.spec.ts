import { assert as t } from "chai";
import { escapeAttr, padStart } from "../index";

describe("escapeAttr", () => {
  it("should escape everything", () => {
    t.equal(escapeAttr("a123<7&2\"'>"), "a123&lt;7&amp;2&quot;&quot;&gt;");
  });
});

describe("pad", () => {
  it("should pad string", () => {
    t.equal(padStart("foo", 2), "  foo");
    t.equal(padStart("foo", 0), "foo");
    t.equal(padStart("foo", 18), "                 foo");
  });
});
