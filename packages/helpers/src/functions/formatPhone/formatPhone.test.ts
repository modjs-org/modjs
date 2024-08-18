import { describe, it, expect } from 'vitest'
import formatPhone from './formatPhone'

describe('formatPhone', () => {
    it('should format a phone number correctly', () => {
        const phoneNumber = '1234567890'
        const expected = '(123) 456-7890'
        const res = formatPhone(phoneNumber)
        expect(res).toEqual(expected)
    })

    it('should handle empty input', () => {
        const phoneNumber = ''
        const expected = ''
        const res = formatPhone(phoneNumber)
        expect(res).toEqual(expected)
    })

    it('should replace non digit with an empty string', () => {
        const phoneNumber = '1234Aa!'
        const expected = '(123) 4'
        const res = formatPhone(phoneNumber)
        expect(res).toEqual(expected)
    })

    it('should handle short input', () => {
        const phoneNumber = '1234'
        const expected = '(123) 4'
        const res = formatPhone(phoneNumber)
        expect(res).toEqual(expected)
    })
})
