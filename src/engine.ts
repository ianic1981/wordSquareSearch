
import { WordsearchRespository } from "./WordsearchRespository";
import { wordSquareSearch } from "./wordSquareSearch";
import * as prompt from 'prompt-sync'
import { print } from "./utills";

export const engine = async () => {

    console.log(
`4 aaccdeeeemmnnnoo
5 aaaeeeefhhmoonssrrrrttttw
5 aabbeeeeeeeehmosrrrruttvv
7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
`
    )

    const size = prompt()('input word square size (default:4):', 4)
    console.log('size is:',size)

    const input = prompt()('input word square string (default:eeeeddoonnnsssrv):', 'eeeeddoonnnsssrv')
    console.log('wordsquare string is:',input)


    const words = await new WordsearchRespository(input, size).findRelevantWords()

    console.log(`found ${words.length} ${size} letter words from dictionary`)
    console.log('searching...')

    globalThis.words = words
    globalThis.size = size

    const wordSquares = words.map(word => wordSquareSearch(input, word)).filter(a => a != undefined);

    if(wordSquares.length >0){
        console.log('found word square:')
        wordSquares.forEach(w => {
            print(w)
            console.log('')
        })
    }
    else
    {
        console.log('No word square found.')
    }
    

}

