import { describe, it, expect } from 'vitest'
import formatName from './formatName'

describe('formatname', () => {
    it('should remove leading whitespace from name', () => {
        const name = '    Prashan Pudasaini'
        const expected = 'Prashan Pudasaini'
        const res = formatName(name)
        expect(res).toEqual(expected)
    })

    it('should retain a single trailing whitespace from name', () => {
        const name = 'Prashan Pudasaini           '
        const expected = 'Prashan Pudasaini '
        const res = formatName(name)
        expect(res).toEqual(expected)
    })

    it('should remove more than a single internal whitespace from name and replace it with single whitespace', () => {
        const name = 'Prashan      Pudasaini'
        const expected = 'Prashan Pudasaini'
        const res = formatName(name)
        expect(res).toEqual(expected)
    })

    it('should capitalize the first letter and every first letter after a whitespace from the name', () => {
        const name = 'prashan pudasaini'
        const expected = 'Prashan Pudasaini'
        const res = formatName(name)
        expect(res).toEqual(expected)
    })
})
