"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe("first test", () => {
    it("should return 43 after awaiting", async () => {
        const result = await (0, index_1.getNumber)();
        expect(result).toBe(43);
    });
    it("should return another 43", () => {
        expect((0, index_1.failedTest)()).toBe(43);
    });
});
//# sourceMappingURL=sum.test.js.map