import { chooseRandomWord } from "../../../src/game/chooseRandomWord"
import { wordsToGuess } from "../../../wordsToGuess"

describe("chooseRandomWord", () => {
  it("should return an object with a word and an array of images", () => {
    const result = chooseRandomWord(wordsToGuess);

    expect(result).toEqual(
      expect.objectContaining({
        word: expect.any(String), // Ensures `word` is a string
        images: expect.arrayContaining([
          expect.objectContaining({ testUri: expect.any(String) }),
        ]), // Ensures `images` is an array of objects with a `testUri` string
      })
    );
  });
});