import isEmpty from '../isEmpty/isEmpty'
import formatMessage from '../formatMessage/formatMessage'

const validateMessage = (
    message: string,
    minLength: number,
    maxLength: number,
): boolean => {
    const formattedMessage = formatMessage(message)
    if (
        !isEmpty(formattedMessage) &&
        formattedMessage.length >= minLength &&
        formattedMessage.length <= maxLength
    ) {
        return true
    }
    return false
}

export default validateMessage
