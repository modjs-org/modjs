import formatPassword from '../formatPassword/formatPassword'
import isEmpty from '../isEmpty/isEmpty'

const validatePasswordUppercase = (password: string): boolean => {
    const passwordRegex = /[A-Z]/
    const formattedPassword = formatPassword(password)
    if (!isEmpty(formattedPassword) && passwordRegex.test(formattedPassword)) {
        return true
    }
    return false
}

export default validatePasswordUppercase
