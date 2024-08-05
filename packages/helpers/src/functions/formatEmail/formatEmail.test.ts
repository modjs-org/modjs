import { describe, it, expect } from 'vitest'
import formatEmail from './formatEmail'

describe('formatEmail', () => {
    it('should remove leading whitespace from email', () => {
        const email = '    test@example.com'
        const expected = 'test@example.com'
        const res = formatEmail(email)
        expect(res).toEqual(expected)
    })

    it('should remove trailing whitespace from email', () => {
        const email = 'test@example.com       '
        const expected = 'test@example.com'
        const res = formatEmail(email)
        expect(res).toEqual(expected)
    })

    it('should remove internal whitespace from email', () => {
        const email = 'test    @example    .com'
        const expected = 'test@example.com'
        const res = formatEmail(email)
        expect(res).toEqual(expected)
    })

    it('should convert email to all lowercase', () => {
        const email = 'TEST@EXAMPLE.COM'
        const expected = 'test@example.com'
        const res = formatEmail(email)
        expect(res).toEqual(expected)
    })

    it('should replace with empty string if email is only whitespace', () => {
        const email = '             '
        const expected = ''
        const res = formatEmail(email)
        expect(res).toEqual(expected)
    })
})
