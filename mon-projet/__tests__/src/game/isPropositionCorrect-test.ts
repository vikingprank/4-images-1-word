import { isPropositionCorrect } from "../../../src/game/isPropositionCorrect"

describe('isPropositionCorrect', ()=> {
    it('should return true when proposition is in hidden letters', ()=>{
        const result = isPropositionCorrect(['A', 'B', 'C'], 'C')

        expect(result).toBeTruthy()
    })
    it('should return false when proposition is not in hidden letters', ()=>{
        const result = isPropositionCorrect(['A', 'B', 'C'], 'D')

        expect(result).toBeFalsy()
    })
})