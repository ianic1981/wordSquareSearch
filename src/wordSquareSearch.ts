
import { getOptionsForRow } from "./utills"
import { WordRow } from "./WordRow"
import { WordSquareBuilder } from "./WordSquareBuilder"

export const wordSquareSearch = (input: string, word: string, size: number) => {
    const initialWord = new WordRow(word)

    const result = applyRow(
        getOptionsForRow(word,1)
        .map(row2Options => new WordSquareBuilder(input)
            .addRow(initialWord.value)
            .clone()
            .addRow(row2Options)
        ),
        2, initialWord)

    const resultFilter = result.filter(a => a.hasFullSqure() && a.isValidWordSquare())
    //console.log(JSON.stringify(resultFilter))
    return resultFilter[0]
}

const applyRow = (array: WordSquareBuilder[], pos: number, initialWord: WordRow) => {

    let result = array.flatMap(row4Options => [...getOptionsForRow(initialWord.value,pos)
        .map(opptionsRow => row4Options.clone().addRow(opptionsRow)
        )])

    if (pos < globalThis.size) {
        pos++
        result = [...result, ...applyRow(result, pos, initialWord)]
    }
    return result


}