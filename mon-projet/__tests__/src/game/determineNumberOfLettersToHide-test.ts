import { determineNumberOfLettersToHide } from "../../../src/game/determineNumberOfLettersToHide";

describe('determineNumberOfLettersToHide', () => {
  test('should hide 3 letters for SLEEP', () => {
    const result = determineNumberOfLettersToHide('SLEEP')
    
    expect(result).toEqual(3)
  });
  test('should hide 5 letters for FUNCTION', () => {
    const result = determineNumberOfLettersToHide('FUNCTION')
    
    expect(result).toEqual(5)
  });
  test('should hide 2 letters for TOE', () => {
    const result = determineNumberOfLettersToHide('TOE')
    
    expect(result).toEqual(2)
  });
  test('should hide 1 letter for GO', () => {
    const result = determineNumberOfLettersToHide('GO')
    
    expect(result).toEqual(1)
  });
});