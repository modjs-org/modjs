import { describe, it, expect } from 'vitest'
import validatePasswordUppercase from './validatePasswordUppercase'

describe('validatePasswordUppercase', () => {
    it('should return false if password does not contain uppercase letters', () => {
        const res = validatePasswordUppercase('password123')
        expect(res).toBe(false)
    })

    it('should return true if password contains uppercase letters', () => {
        const res = validatePasswordUppercase('Password123')
        expect(res).toBe(true)
    })
})
