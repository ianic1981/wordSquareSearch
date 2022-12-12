
import { getOptionsForRow } from "./utills"
import { WordRow } from "./wordRow"
import { WordSquareBuilder } from "./wordSquareBuilder"

export const wordSquareSearch = (input: string, word: string, size: number) => {
    const initialWord = new WordRow(word)

    const result = applyRow(
        getOptionsForRow(word,1)
        .map(row2Options => new WordSquareBuilder(input)
            .addRow(initialWord.value)
            ?.clone()
            ?.addRow(row2Options)
        ).filter(a => a != null),
        2, initialWord)

    const resultFilter = result.filter(a => a && a.hasFullSqure() && a.isValidWordSquare())
    //console.log(JSON.stringify(resultFilter))
    return resultFilter[0]
}

const applyRow = (array: WordSquareBuilder[], pos: number, initialWord: WordRow) => {

    let result = array.flatMap(row4Options => [...getOptionsForRow(initialWord.value,pos)
        .map(opptionsRow => row4Options && row4Options.clone().addRow(opptionsRow)
        ).filter(a => a != null)])

    if (pos < globalThis.size) {
        pos++
        result = [...result, ...applyRow(result, pos, initialWord)]
    }
    return result


}