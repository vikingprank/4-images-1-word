import { randomlyChooseExtraLetters } from "../../../src/game/randomlyChooseExtraLetters"

describe('randomlyChooseExtraLetters', () => { 
    it('should return 9 letters for SLEEP', ()=>{
        const result = randomlyChooseExtraLetters(['S', 'L', 'E'])
        
        expect(result.length).toEqual(9)
    })

    it('should return not return one of the letters received', ()=>{
        const result = randomlyChooseExtraLetters(['S', 'L', 'E'])
        
        expect(result).not.toContain('S')
        expect(result).not.toContain('L')
        expect(result).not.toContain('E')
    })

    it('should return 9 letters for FUNCTION', ()=>{
        const result = randomlyChooseExtraLetters(['F', 'U', 'N', 'C', 'T'])
        
        expect(result.length).toEqual(7)
    })
 })