import { isvalidLetter } from "./utills"
import { WordRow } from "./WordRow"

export class WordSquareBuilder {

    private rows: WordRow[] = []

    constructor(private validLetters: string) { }

    public addRow(value: string) {
        if (isvalidLetter(this,value)) {
            this.rows.push(new WordRow(value))
        }
        return this
    }

    // public hasFullSqure(){
    //     return this.rows.length == globalThis.size
    // }

    // public isValidWordSquare(){
    //     // console.log(this.rows)
    //     let valid = true

    //     for (let i = 0; i < this.rows.length; i++) {

    //         //console.log(this.wordFromRow(i) )
    //         if(this.rows[i].value != this.wordFromRow(i)){
    //             valid = false
    //         }

    //     }
    //     return valid
    // }

    // private wordFromRow(row:number){

    //     const rowStr =this.rows.map(a => a.value[row]).toString().replaceAll(',','')
    //     return rowStr
    // }


    // public print(){
    //     this.rows.forEach(r=> console.log(r.value))
    // }

    // private addAll(rows:WordRow[]) : WordSquareBuilder{
    //     rows.forEach(a => this.rows.push(a))
    //     return this
    // }

    // public clone(){
    //     return new WordSquareBuilder(this.validLetters).addAll(this.rows) 
    // }

    // private isvalidLetter(value: string): boolean {
    //     return this.isValidFirstLetter() && this.allowedLetters(value)
    // }

    // private isValidFirstLetter() {
    //     const row = this.rows.length - 1

    //     return this.rows.length == 0 ? true : this.rows[row].letterAt(0) == this.rows[0].letterAt(row)
    // }
    // private allowedLetters(value) {

    //     let valid = true

    //     const chars = value.split('')

    //     let temp = this.validLetters

    //     //console.log(chars)
    //     for (let i = 0; i < chars.length; i++) {

    //         //console.log(chars[i],temp.indexOf(chars[i]))
    //         if (temp.indexOf(chars[i]) == -1) {
    //             valid = false
    //             break;
    //         }
    //         else {
    //             //console.log(temp)

    //             const position = temp.indexOf(chars[i])
    //             temp = temp.substring(0, position)
    //                 + this.validLetters.substring(position + 1)
    //             this.validLetters = temp
    //             // console.log(this.validLetters)
    //         }
    //     }

    //     return valid
    // }

}