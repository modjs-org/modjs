import { describe, it, expect } from 'vitest'
import formatUrl from './formatUrl'

describe('formatUrl', () => {
    it('should remove leading and trailing whitespace from url', () => {
        const url = '      www.fullstackpro.io      '
        const expected = 'www.fullstackpro.io'
        const res = formatUrl(url)
        expect(res).toEqual(expected)
    })
    it('should remove internal whitespace from url', () => {
        const url = 'www.fullstack         pro.io'
        const expected = 'www.fullstackpro.io'
        const res = formatUrl(url)
        expect(res).toEqual(expected)
    })
})
