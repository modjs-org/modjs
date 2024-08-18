import { describe, it, expect } from 'vitest'
import validatePasswordLowercase from './validatePasswordLowercase'

describe('validatePasswordLowercase', () => {
    it('should return false if password does not contain lowercase characters', () => {
        const res = validatePasswordLowercase('PASSWORD123$')
        expect(res).toBe(false)
    })

    it('should return true if password contains lowercase characters', () => {
        const res = validatePasswordLowercase('Password123$')
        expect(res).toBe(true)
    })
})
