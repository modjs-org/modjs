import { describe, it, expect } from 'vitest'
import validateEmail from './validateEmail'

describe('validateEmail', () => {
    it('should not be valid if the email is empty', () => {
        const email = ''
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the email length is less than specified minLength', () => {
        const email = 't@t.c'
        const res = validateEmail(email, 5, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the length is more than specified maxLength', () => {
        const email =
            'test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test.test@test.com'
        const res = validateEmail(email, 6, 65)
        expect(res).toBe(false)
    })
    it('should not be valid if the email does not contain the local part', () => {
        const email = '@example.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the username contains unallowed special char', () => {
        const email = 't#st@example.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the email does not contain the @ symbol after the username', () => {
        const email = 'testexample.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the email does not contain the domain name', () => {
        const email = 'test@.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the domain name contain unallowed special char', () => {
        const email = 'test@exam$ple.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the email does not contain . after the domain name', () => {
        const email = 'test@examplecom'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the email contains special character after the domain name', () => {
        const email = 'test@example&com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the email does not contain tld', () => {
        const email = 'test@example'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the email contains special characters in the tld', () => {
        const email = 'test@example.c%m'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should not be valid if the tld is less than 2 characters long', () => {
        const email = 'test@example.c'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(false)
    })
    it('should be valid with more than 2 characters in the tld', () => {
        const email = 'test@example.info'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(true)
    })
    it('should be valid with hyphen in the local part', () => {
        const email = 'test-one@example.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(true)
    })
    it('should be valid with dot in the local part', () => {
        const email = 'test.one@example.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(true)
    })
    it('should be valid with underscore in the local part ', () => {
        const email = 'test_one@example.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(true)
    })
    it('should be valid with plus in the local part', () => {
        const email = 'test+one@example.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(true)
    })
    it('should be valid with hyphen in the domain name', () => {
        const email = 'test@example-one.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(true)
    })
    it('should be valid with dot in the domain name', () => {
        const email = 'test@example.one.com'
        const res = validateEmail(email, 6, 64)
        expect(res).toBe(true)
    })
})
