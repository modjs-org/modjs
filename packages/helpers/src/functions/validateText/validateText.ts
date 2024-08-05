import isEmpty from '../isEmpty/isEmpty'

const validateText = (
    text: string,
    minLength: number,
    maxLength: number,
): boolean => {
    if (
        !isEmpty(text) &&
        text.length >= minLength &&
        text.length <= maxLength
    ) {
        return true
    }
    return false
}

export default validateText
