import formatPassword from '../formatPassword/formatPassword'
import isEmpty from '../isEmpty/isEmpty'

const validatePasswordSpecialChar = (password: string): boolean => {
    const passwordRegex = /[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+-]/
    const formattedPassword = formatPassword(password)
    if (!isEmpty(formattedPassword) && passwordRegex.test(formattedPassword)) {
        return true
    }
    return false
}

export default validatePasswordSpecialChar
