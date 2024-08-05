import { describe, it, expect } from 'vitest'
import validatePasswordLength from './validatePasswordLength'

describe('validatePasswordLength', () => {
    it('should return false for passwords shorter specified minLength', () => {
        const res = validatePasswordLength('Ad$', 5, 32)
        expect(res).toBe(false)
    })

    it('should return false for passwords greater than specified maxLength', () => {
        const res = validatePasswordLength('Abcdefgh$Abcdef', 8, 10)
        expect(res).toBe(false)
    })

    it('should return true for passwords between specified minLength and maxLength', () => {
        const res = validatePasswordLength('Abcdefg1@h$', 8, 256)
        expect(res).toBe(true)
    })
})
