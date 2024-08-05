import { describe, it, expect } from 'vitest'
import formatPassword from './formatPassword'

describe('formatPassword', () => {
    it('should remove leading whitespace from password', () => {
        const password = '    Passw0rd!'
        const expected = 'Passw0rd!'
        const res = formatPassword(password)
        expect(res).toEqual(expected)
    })

    it('should remove trailing whitespace from password', () => {
        const password = 'Passw0rd!       '
        const expected = 'Passw0rd!'
        const res = formatPassword(password)
        expect(res).toEqual(expected)
    })

    it('should remove internal whitespace from password', () => {
        const password = 'Pa      ss    w0     rd!'
        const expected = 'Passw0rd!'
        const res = formatPassword(password)
        expect(res).toEqual(expected)
    })

    it('should replace with empty string if password is only whitespace', () => {
        const password = '             '
        const expected = ''
        const res = formatPassword(password)
        expect(res).toEqual(expected)
    })
})
