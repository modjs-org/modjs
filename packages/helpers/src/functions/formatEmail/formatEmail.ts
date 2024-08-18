const formatEmail = (email: string): string =>
    email.replace(/\s/g, '').toLowerCase()
export default formatEmail
