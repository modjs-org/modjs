import formatPassword from '../formatPassword/formatPassword'
import isEmpty from '../isEmpty/isEmpty'

const validatePasswordDigit = (password: string): boolean => {
    const passwordRegex = /\d/
    const formattedPassword = formatPassword(password)
    if (!isEmpty(formattedPassword) && passwordRegex.test(formattedPassword)) {
        return true
    }
    return false
}

export default validatePasswordDigit
