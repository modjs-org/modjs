import { describe, it, expect } from 'vitest'
import matchStrings from './matchStrings'

describe('matchStrings', () => {
    it('should return true if two strings are equal', () => {
        const str1 = 'hello'
        const str2 = 'hello'
        const res = matchStrings(str1, str2)
        expect(res).toBe(true)
    })

    it('should return false if two strings are not equal', () => {
        const str1 = 'hello'
        const str2 = 'world'
        const res = matchStrings(str1, str2)
        expect(res).toBe(false)
    })

    it('should be case sensitive', () => {
        const str1 = 'hello'
        const str2 = 'Hello'
        const res = matchStrings(str1, str2)
        expect(res).toBe(false)
    })

    it('should check for special characters', () => {
        const str1 = 'Testing1234@'
        const str2 = 'Testing1234@'
        const res = matchStrings(str1, str2)
        expect(res).toBe(true)
    })
})
