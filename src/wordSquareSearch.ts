
import { clone, getOptionsForRow, hasFullSqure, isValidWordSquare } from "./utills"
import { WordRow } from "./WordRow"
import { WordSquareBuilder } from "./WordSquareBuilder"

export const wordSquareSearch = (input: string, word: string) => {
    const initialWord = new WordRow(word)

    const result = applyRow(
        getOptionsForRow(word,1)
        .map(row2Options => clone(new WordSquareBuilder(input)
            .addRow(initialWord.value))
            //.clone()
            .addRow(row2Options)
        ),
        2, initialWord)

    const resultFilter = result.filter(a => hasFullSqure(a) && isValidWordSquare(a))
    //console.log(JSON.stringify(resultFilter))
    return resultFilter[0]
}

const applyRow = (array: WordSquareBuilder[], pos: number, initialWord: WordRow) => {

    let result = array.flatMap(row4Options => [...getOptionsForRow(initialWord.value,pos)
        .map(opptionsRow => clone(row4Options).addRow(opptionsRow)
        )])

    if (pos < globalThis.size) {
        pos++
        result = [...result, ...applyRow(result, pos, initialWord)]
    }
    return result


}