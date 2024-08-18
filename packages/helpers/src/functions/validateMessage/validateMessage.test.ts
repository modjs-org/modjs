import { describe, it, expect } from 'vitest'
import validateMessage from './validateMessge'

describe('validateMessage', () => {
    it('should not be valid if the msg is empty', () => {
        const msg = ''
        const res = validateMessage(msg, 1, 2500)
        expect(res).toBe(false)
    })
    it('should not be valid if the msg length is less than specified minLength', () => {
        const msg = 'He'
        const res = validateMessage(msg, 4, 2500)
        expect(res).toBe(false)
    })
    it('should not be valid if the length is more than specified maxLength', () => {
        const msg =
            'This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. This is a test message. '
        const res = validateMessage(msg, 1, 2500)
        expect(res).toBe(false)
    })
    it('should be valid for message length between minLength and maxLength', () => {
        const msg = 'Hello'
        const res = validateMessage(msg, 1, 2500)
        expect(res).toBe(true)
    })
})
