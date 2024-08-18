import { describe, it, expect } from 'vitest'
import generateUuid from './generateUuid'

describe('generateUuid', () => {
    it('should generate a valid UUID', () => {
        const uuidPattern =
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        const uuid = generateUuid()
        expect(uuidPattern.test(uuid)).toBe(true)
    })
})
