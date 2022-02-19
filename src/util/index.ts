export const getSimpleName = (name: string) => {
    const splitted_name: string[] = name.split(' ');
    if (splitted_name.length == 1) {
        return `${splitted_name[0]}`

    }
    return `${splitted_name[0]} ${splitted_name[splitted_name.length - 1]}`
}