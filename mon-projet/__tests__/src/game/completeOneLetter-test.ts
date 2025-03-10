import { completeOneLetter } from "../../../src/game/completeOneLetter";

describe("completeOneLetter", () => {
  it("should return word with the proposition", () => {
    const result = completeOneLetter("SLEEP", "SLE_P", "E");

    expect(result).toEqual(["S", "L", "E", "E", "P"]);
  });

  it("should return word with only one of the 2 letters completed", () => {
    const result = completeOneLetter("SLEEP", "SL__P", "E");

    expect(result).toEqual(["S", "L", "E", "_", "P"]);
  });
});
