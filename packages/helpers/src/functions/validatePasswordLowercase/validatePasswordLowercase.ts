import formatPassword from '../formatPassword/formatPassword'
import isEmpty from '../isEmpty/isEmpty'

const validatePasswordLowercase = (password: string): boolean => {
    const passwordRegex = /[a-z]/
    const formattedPassword = formatPassword(password)
    if (!isEmpty(formattedPassword) && passwordRegex.test(formattedPassword)) {
        return true
    }
    return false
}

export default validatePasswordLowercase
