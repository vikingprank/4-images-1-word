import { chooseLettersToHide } from "../../../src/game/chooseLettersToHide"

describe('chooseLettersToHide', ()=>{
    it('should give us an array of 3 letters for SLEEP',()=>{
        const result = chooseLettersToHide('SLEEP', 3)

        expect(result.length).toEqual(3)
    })
    it('should give us an array of 5 letters for FUNCTION',()=>{
        const result = chooseLettersToHide('FUNCTION', 5)

        expect(result.length).toEqual(5)
    })
})