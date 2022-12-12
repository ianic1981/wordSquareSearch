import { parseInput } from "./utills";
import * as http from 'node:http';


export class WordsearchRespository {
    private inputSet: string[]
    private regex: RegExp
    private data: string

    constructor(input: string, private size: number) {
        this.inputSet = parseInput(input)
        this.regex = new RegExp(`^[${this.inputSet.toString().replaceAll(',', '|')}]{${this.size}}$`)
    }

    private filter(data, regex) {
        return data.split('\n').filter(d => regex.test(d));
    }

    public findRelevantWords():Promise<string[]> {
        return new Promise((resolve, reject) => {

            http.get('http://norvig.com/ngrams/enable1.txt', (res) => {

                //console.log(`start ${this.inputSet}`)
                //console.log(this.regex)

                res.on('data', (d) => {
                    this.data += d
                });

                res.on('end', (d) => {
                    resolve(this.filter(this.data, this.regex))


                });

            }).on('error', (e) => {
                console.error(e);
                reject(e)
            });


        })
    }
}