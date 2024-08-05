const formatName = (name: string): string =>
    name
        .replace(/\s+/g, ' ')
        .replace(/\./g, '')
        .replace(/^\s+/, '')
        .replace(/(^\w|\s\w)/g, match => match.toUpperCase())

export default formatName
