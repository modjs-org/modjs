const formatPhone = (phoneNumber: string): string => {
    phoneNumber = phoneNumber.replace(/\D/g, '')
    if (phoneNumber.length <= 3) {
        phoneNumber = `${phoneNumber}`
    } else if (phoneNumber.length <= 6) {
        phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else {
        phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
    return phoneNumber
}
export default formatPhone
