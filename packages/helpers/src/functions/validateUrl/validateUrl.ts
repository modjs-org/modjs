import isEmpty from '../isEmpty/isEmpty'
import formatUrl from '../formatUrl/formatUrl'

const validateUrl = (
    url: string,
    minLength: number,
    maxLength: number,
): boolean => {
    const formattedUrl = formatUrl(url)
    if (
        !isEmpty(formattedUrl) &&
        formattedUrl.length >= minLength &&
        formattedUrl.length <= maxLength
    ) {
        return true
    }
    return false
}

export default validateUrl
