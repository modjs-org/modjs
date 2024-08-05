import { describe, it, expect } from 'vitest'
import isEmpty from './isEmpty'

describe('isEmpty', () => {
    it('should return true for empty string', () => {
        const res = isEmpty('')
        expect(res).toBe(true)
    })

    it('should return true for string with only whitespace', () => {
        const res = isEmpty('   ')
        expect(res).toBe(true)
    })

    it('should return false for non-empty string', () => {
        const res = isEmpty('hello')
        expect(res).toBe(false)
    })
})
