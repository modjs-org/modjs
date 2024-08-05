import { describe, it, expect } from 'vitest'
import validatePhone from './validatePhone'

describe('validatePhone', () => {
    it('should return true if it is a valid 10 digit phone number', () => {
        const res = validatePhone('1234567890')
        expect(res).toBe(true)
    })

    it('should return false if phone number does not have 10 digits', () => {
        const res = validatePhone('123456789')
        expect(res).toBe(false)
    })
})
