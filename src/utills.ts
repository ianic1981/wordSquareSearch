export const parseInput = (i): string[] => {
    return [...new Set(i.split(""))] as string[];
}

export const getOptionsForRow = (value,position): string[] => {
    return globalThis.words.filter(x => x[0] == value[position])
}