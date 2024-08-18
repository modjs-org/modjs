import { describe, it, expect } from 'vitest'
import validatePasswordDigit from './validatePasswordDigit'

describe('validatePasswordDigit', () => {
    it('should return false for passwords without digits', () => {
        const res = validatePasswordDigit('Abcdefgh$')
        expect(res).toBe(false)
    })

    it('should return true for passwords with digits', () => {
        const res = validatePasswordDigit('Abcdefgh1$')
        expect(res).toBe(true)
    })
})
