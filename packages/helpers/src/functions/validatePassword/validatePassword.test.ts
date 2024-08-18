import { describe, it, expect } from 'vitest'
import validatePassword from './validatePassword'

describe('validatePassword', () => {
    it('should return false for passwords less than specified minLength', () => {
        const res = validatePassword('Ad1$', 8, 256)
        expect(res).toBe(false)
    })
    it('should return false for passwords more than specified maxLength', () => {
        const res = validatePassword('Testing!@1Te', 8, 10)
        expect(res).toBe(false)
    })
    it('should return false for passwords without uppercase letters', () => {
        const res = validatePassword('abcdefgh1$', 8, 256)
        expect(res).toBe(false)
    })
    it('should return false for passwords without lowercase letters', () => {
        const res = validatePassword('ABCDEFGH1$', 8, 256)
        expect(res).toBe(false)
    })
    it('should return false for passwords without digits', () => {
        const res = validatePassword('Abcdefgh$', 8, 256)
        expect(res).toBe(false)
    })
    it('should return false for passwords without special characters', () => {
        const res = validatePassword('Abcdefgh1', 8, 256)
        expect(res).toBe(false)
    })
    it('should return false for password with no characters', () => {
        const res = validatePassword('', 8, 256)
        expect(res).toBe(false)
    })
    it('should return true for valid passwords', () => {
        const res = validatePassword('Abcdefgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character caret '^' `, () => {
        const res = validatePassword('Abcdefgh1^', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character dollar '$' `, () => {
        const res = validatePassword('Abcdef$gh1', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character star '*' `, () => {
        const res = validatePassword('Abcdef*gh1', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character dot '.' `, () => {
        const res = validatePassword('Abcdef.gh1', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character opening square bracket '[' `, () => {
        const res = validatePassword('Abcdef$gh1[', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character closing square bracket ']' `, () => {
        const res = validatePassword('Abcdefgh1$]', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character opening curly braces '{' `, () => {
        const res = validatePassword('Abcdefgh1{', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character closing curly braces '}' `, () => {
        const res = validatePassword('Abcdefgh1$}', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character opening paranthetis '(' `, () => {
        const res = validatePassword('Abcd(efgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character closing paranthetis ')' `, () => {
        const res = validatePassword('Abcd)efgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character question mark '?' `, () => {
        const res = validatePassword('Abcde?fgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character quote '"' `, () => {
        const res = validatePassword('Abcde"fgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character exclamation '!' `, () => {
        const res = validatePassword('Abcdefgh!1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character '@' `, () => {
        const res = validatePassword('Abcd@efgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character hash '#' `, () => {
        const res = validatePassword('Abcde#fgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character percentage '%' `, () => {
        const res = validatePassword('Abcdefg%h1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character ampersand '&' `, () => {
        const res = validatePassword('&Abcdefgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character forward slash '/' `, () => {
        const res = validatePassword('Abcdef/gh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character backward slash `, () => {
        const res = validatePassword('Abcdefgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character comma ',' `, () => {
        const res = validatePassword('Abcd,efgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character right chevron '>' `, () => {
        const res = validatePassword('Abcdef>gh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character left chevron '<' `, () => {
        const res = validatePassword('Abcd<efgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character single quote ''' `, () => {
        const res = validatePassword(`Abcde'fgh1$`, 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character colon ':' `, () => {
        const res = validatePassword('Abcdef:gh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character semicolon ';' `, () => {
        const res = validatePassword('Abcdefg;h1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character pipe '|' `, () => {
        const res = validatePassword('Abcdef|gh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character underscore '_' `, () => {
        const res = validatePassword('Abcdefg_h1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character tilde '~' `, () => {
        const res = validatePassword('Abcd~efgh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character backtick `, () => {
        const res = validatePassword('Abcdef`gh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character equals '=' `, () => {
        const res = validatePassword('Abcdefg=h1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character plus '+' `, () => {
        const res = validatePassword('Abcdef+gh1$', 8, 256)
        expect(res).toBe(true)
    })
    it(`should return true for password with special character hyphen '-' `, () => {
        const res = validatePassword('Abcdef-gh1$', 8, 256)
        expect(res).toBe(true)
    })
})
