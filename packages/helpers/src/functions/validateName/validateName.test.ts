import { describe, it, expect } from 'vitest'
import validateName from './validateName'

describe('validateName', () => {
    it('should return false for name greater than specified maxLength', () => {
        const res = validateName(
            'Prashanprashanprashanprashanprashanprashanprashanprashanprashanprashanprashan',
            1,
            10,
        )
        expect(res).toBe(false)
    })
    it('should return false for name less than specified minLength', () => {
        const res = validateName('Pra', 5, 10)
        expect(res).toBe(false)
    })
    it('should return false if the name is empty', () => {
        const res = validateName('', 1, 10)
        expect(res).toBe(false)
    })
    it('should return false for name with an empty string', () => {
        const res = validateName('      ', 1, 10)
        expect(res).toBe(false)
    })
    it('should return false if the name contains special characters other than hyphen and single quote', () => {
        const res = validateName('Prashan Pud@$@!ini!', 1, 50)
        expect(res).toBe(false)
    })
    it('should return true if the name contains hyphen and single quote', () => {
        const res = validateName(`Pra-shan P'udasaini`, 1, 50)
        expect(res).toBe(true)
    })
    it('should return true for name with at least 1 character', () => {
        const res = validateName('T', 1, 10)
        expect(res).toBe(true)
    })
    it('should return true for multiple names', () => {
        const res = validateName('Prashan Middlename Pudasaini', 1, 64)
        expect(res).toBe(true)
    })
})
