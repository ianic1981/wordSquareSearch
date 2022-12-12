
import { WordsearchRespository } from "./wordsearchRespository";
import { wordSquareSearch } from "./wordSquareSearch";
import * as prompt from 'prompt-sync'

export const engine = async () => {

    console.log(
` 4 aaccdeeeemmnnnoo
 5 aaaeeeefhhmoonssrrrrttttw
 5 aabbeeeeeeeehmosrrrruttvv
 7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy
 `
 )

    const size = prompt()('input word square size (default:5):', 5)
    console.log('size is:', size)

    const input = prompt()('input word square string (default:aaaeeeefhhmoonssrrrrttttw):', 'aaaeeeefhhmoonssrrrrttttw')
    console.log('wordsquare string is:', input)


    const words = await new WordsearchRespository(input, size).findRelevantWords()

    globalThis.words = words

    console.log(`found ${words.length} ${size} letter words from dictionary`)
    console.log('searching')

    globalThis.size = size
    globalThis.words = words

    for (let i = 0; i < words.length; i++) {

        const wordSquares = wordSquareSearch(input, words[i], size)

        if (wordSquares) {
            console.log('\nfound word square:')
            wordSquares.print()
            console.log('')
            break
        }
        if(i %10 ==0){
            process.stdout.write('.')
            //console.log(process.memoryUsage(),process.cpuUsage())

        }
    }


}

