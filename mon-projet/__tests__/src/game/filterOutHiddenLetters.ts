import { filterOutHiddenLetters } from "../../../src/game/filterOutHiddenLetters"

describe('filterOutHiddenLetters', ()=>{
    it('should replace letters received with underscores', ()=>{
        const result = filterOutHiddenLetters('SLEEP', ['L', 'E', 'E'])

        expect(result).toMatchObject(['S', '_', '_', '_', 'P'])
    })
})