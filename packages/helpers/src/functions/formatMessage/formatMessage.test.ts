import { describe, it, expect } from 'vitest'
import formatMessage from './formatMessage'

describe('formatMessage', () => {
    it('should remove one or more leading whitespace from message', () => {
        const msg = '    This is a message'
        const expected = 'This is a message'
        const res = formatMessage(msg)
        expect(res).toEqual(expected)
    })
    it('should retain trailing whitespace from message', () => {
        const msg = 'This is a message   '
        const expected = 'This is a message   '
        const res = formatMessage(msg)
        expect(res).toEqual(expected)
    })
})
