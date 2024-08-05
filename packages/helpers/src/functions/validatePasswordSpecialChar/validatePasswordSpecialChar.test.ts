import { describe, it, expect } from 'vitest'
import validatePasswordSpecialChar from './validatePasswordSpecialChar'

describe('validatePasswordSpecialChar', () => {
    it('should return false if password does not contain special characters', () => {
        const res = validatePasswordSpecialChar('Password123')
        expect(res).toBe(false)
    })

    it('should return true if password contains special characters', () => {
        const res = validatePasswordSpecialChar('Password123$')
        expect(res).toBe(true)
    })
})
