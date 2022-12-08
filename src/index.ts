

// const inputSet = parseInput(input)

import { engine } from "./engine";

// http.get('http://norvig.com/ngrams/enable1.txt', (res) => {


//   const length = 4 

//   console.log(`start ${inputSet}`)

//   const regexstr = `^[${inputSet.toString().replaceAll(',','|')}]{${length}}$`

//   const regex = new RegExp(regexstr)

//   console.log(regexstr)

//   res.on('data', (d) => {
//     data += d
//   });

//   res.on('end', (d) => {
//     //process.stdout.write(d);
//     console.log('possible values')
//     const possibleWords = filter(data, regex)
//     console.log(possibleWords)
//     new Engine(possibleWords,input)

//   });

// }).on('error', (e) => {
//   console.error(e);
// });

// function filter(data,regex) {
//   return data.split('\n').filter(d => regex.test(d) );
// }

// function Engine(words, input){

//     let temp = new PuzzelTest(words[a -1], words,input)

//   console.log(temp)

// }

// function PuzzelTest(wordStr, position, words, input){

// console.log(position)

// let word = new LinkedWord(wordStr, words,position,input)

//   if (position == 4){
//     PuzzelTest()
//   }
//   else{
//     return this
//   }

//   return this


// }


// class LinkedWord{

//   word
//   words
//   position
//   input
//    getAssciated = function(){
//     return this.words.filter(x => x[this.position] == this.word[this.position])
//    }
 


//   constructor(word, words,position){
//     this.word = word
//     this.words = words
//     this.position = position-1
//     this.input = input
//   }
// }




engine()