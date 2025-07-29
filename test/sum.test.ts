import { getNumber } from "../src/index";

describe("first test", () => {
  it("should return 43 after awaiting", async () => {
    const result = await getNumber();
    expect(result).toBe(43);
  });
});
