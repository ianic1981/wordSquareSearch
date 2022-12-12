
export class WordRow {

    constructor(
        public value: string) { }

    letterAt(position: number) {
        return this.value[position]
    }

    

}