import { describe, it, expect } from 'vitest'
import validateUrl from './validateUrl'

describe('validateUrl', () => {
    it('should not be valid if the url is empty', () => {
        const url = ''
        const res = validateUrl(url, 1, 2083)
        expect(res).toBe(false)
    })
    it('should not be valid if the url length is less than specified minLength', () => {
        const url = 'www.fullstack'
        const res = validateUrl(url, 15, 2083)
        expect(res).toBe(false)
    })
    it('should not be valid if the url length is more than specified maxLength', () => {
        const url = 'www.fullstackprofullstackprofullstackpro.io'
        const res = validateUrl(url, 1, 20)
        expect(res).toBe(false)
    })
    it('should be valid if the url length is between specified minLength and maxLength', () => {
        const url = 'www.fullstackpro.io'
        const res = validateUrl(url, 1, 2083)
        expect(res).toBe(true)
    })
})
