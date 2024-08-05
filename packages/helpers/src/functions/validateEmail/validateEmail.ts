import isEmpty from '../isEmpty/isEmpty'
import formatEmail from '../formatEmail/formatEmail'

const validateEmail = (
    email: string,
    minLength: number,
    maxLength: number,
): boolean => {
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const formattedEmail = formatEmail(email)
    if (
        !isEmpty(formattedEmail) &&
        emailRegex.test(formattedEmail) &&
        formattedEmail.length >= minLength &&
        formattedEmail.length <= maxLength
    ) {
        return true
    }
    return false
}

export default validateEmail
