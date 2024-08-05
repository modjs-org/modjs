import isEmpty from '../isEmpty/isEmpty'
import formatName from '../formatName/formatName'

const validateName = (
    name: string,
    minLength: number,
    maxLength: number,
): boolean => {
    const nameRegex = /^[A-Za-z'-]+( [A-Za-z'-]+)*$/
    const formattedName = formatName(name)

    if (
        !isEmpty(formattedName) &&
        nameRegex.test(formattedName) &&
        formattedName.length >= minLength &&
        formattedName.length <= maxLength
    ) {
        return true
    }
    return false
}

export default validateName
