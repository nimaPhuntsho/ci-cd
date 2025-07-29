import { getNumber, failedTest, featureOne } from "../src/index";

describe("first test", () => {
  it("should return 43 after awaiting", async () => {
    const result = await getNumber();
    expect(result).toBe(43);
  });

  it("should return another 43", () => {
    expect(failedTest()).toBe(43);
  });

  it("should return 43 again for feature one", () => {
    expect(featureOne()).toBe(4);
  });
});
