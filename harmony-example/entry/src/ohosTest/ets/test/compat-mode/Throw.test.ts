import { describe, test } from "../utils/setup.test";
import bindings from "../utils/compat.test";

export default () => {
  describe("CompatThrowTest", () => {
    test("should be able to throw error from native", (t) => {
      t.throws(bindings.testThrow);
    });

    test("should be able to throw error from native with reason", (t) => {
      const reason = "Fatal";
      t.throws(() => bindings.testThrowWithReason(reason), void 0, reason);
    });

    test("should throw if argument type is not match", (t) => {
      t.throws(() => bindings.testThrowWithReason(2));
    });

    test("should throw if Rust code panic", (t) => {
      t.throws(() => bindings.testThrowWithPanic());
    });
  });
};
