import formatPassword from '../formatPassword/formatPassword'
import isEmpty from '../isEmpty/isEmpty'

const validatePassword = (
    password: string,
    minLength: number,
    maxLength: number,
): boolean => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+-]+$/
    const formattedPassword = formatPassword(password)
    if (
        !isEmpty(formattedPassword) &&
        passwordRegex.test(formattedPassword) &&
        formattedPassword.length >= minLength &&
        formattedPassword.length <= maxLength
    ) {
        return true
    }
    return false
}

export default validatePassword
