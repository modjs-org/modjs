import isEmpty from '../isEmpty/isEmpty'

const validatePhone = (phoneNumber: string): boolean => {
    const phoneRegex = /^\d{10}$/
    const formattedPhone = phoneNumber.replace(/\D/g, '')
    if (!isEmpty(formattedPhone) && phoneRegex.test(formattedPhone)) {
        return true
    }
    return false
}

export default validatePhone
