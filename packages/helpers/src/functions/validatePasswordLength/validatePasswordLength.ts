import formatPassword from '../formatPassword/formatPassword'
import isEmpty from '../isEmpty/isEmpty'

const validatePasswordLength = (
    password: string,
    minLength: number,
    maxLength: number,
): boolean => {
    const formattedPassword = formatPassword(password)

    if (
        !isEmpty(formattedPassword) &&
        formattedPassword.length >= minLength &&
        formattedPassword.length <= maxLength
    ) {
        return true
    }
    return false
}

export default validatePasswordLength
