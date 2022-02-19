export const getSimpleName = (name: string) => {
    const splitted_name = name.split(' ');
    return `${splitted_name[0]} ${splitted_name[splitted_name.length - 1]}`
}