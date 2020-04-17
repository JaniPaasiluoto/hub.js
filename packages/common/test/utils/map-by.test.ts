import { mapBy } from "../../src";

describe("mapBy", function() {
  it("maps by prop", function() {
    const arr = [{ foo: "bar" }, { foo: "baz" }];
    const res = mapBy("foo", arr);
    expect(res).toEqual(["bar", "baz"]);
  });
});
