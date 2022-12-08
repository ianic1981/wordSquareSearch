import { WordRow } from "./WordRow";
import { WordSquareBuilder } from "./WordSquareBuilder";

export const parseInput = (i): string[] => {
    return [...new Set(i.split(""))] as string[];
}

export const getOptionsForRow = (value,position): string[] => {
    return globalThis.words.filter(x => x[0] == value[position])
}

export const isvalidLetter =(wbs, value: string): boolean =>{
    return isValidFirstLetter(wbs) && allowedLetters(wbs,value)
}

const isValidFirstLetter = (wbs) =>{
    const row = wbs.rows.length - 1
    return wbs.rows.length == 0 ? true : wbs.rows[row].letterAt(0) == wbs.rows[0].letterAt(row)
}

const allowedLetters = (wbs,value) => {

    let valid = true

    const chars = value.split('')

    let temp = wbs.validLetters

    //console.log(chars)
    for (let i = 0; i < chars.length; i++) {

        //console.log(chars[i],temp.indexOf(chars[i]))
        if (temp.indexOf(chars[i]) == -1) {
            valid = false
            break;
        }
        else {
            //console.log(temp)

            const position = temp.indexOf(chars[i])
            temp = temp.substring(0, position)
                + wbs.validLetters.substring(position + 1)
                wbs.validLetters = temp
            // console.log(this.validLetters)
        }
    }

    return valid
}

export const print = (wbs)=>{
    wbs.rows.forEach(r => console.log(r.value))
}

export const isValidWordSquare = (wbs) =>{
    // console.log(this.rows)
    let valid = true

    for (let i = 0; i < wbs.rows.length; i++) {

        //console.log(this.wordFromRow(i) )
        if(wbs.rows[i].value != wordFromRow(wbs,i)){
            valid = false
        }

    }
    return valid
}

const wordFromRow = (wbs,row:number) =>{

    const rowStr =wbs.rows.map(a => a.value[row]).toString().replaceAll(',','')
    return rowStr
}

export const hasFullSqure = (wbs)=>{
    return wbs.rows.length == globalThis.size
}

const addAll = (wbs, rows:WordRow[]) : WordSquareBuilder =>{
    rows.forEach(a => wbs.rows.push(a))
    return wbs
}

export const clone = (wbs) : WordSquareBuilder=>{
    return addAll(new WordSquareBuilder(wbs.validLetters),wbs.rows) 
}