const http = require('node:http');

let data = ''

input = 'eeeeddoonnnsssrv'

const parseInput = (i)=> {
return [...new Set(i.split(""))];

}

const inputSet = parseInput(input)

http.get('http://norvig.com/ngrams/enable1.txt', (res) => {


  const length = 4 

  console.log(`start ${inputSet}`)

  const regexstr = `^[${inputSet.toString().replaceAll(',','|')}]{${length}}$`

  const regex = new RegExp(regexstr)

  console.log(regexstr)

  res.on('data', (d) => {
    data += d
  });

  res.on('end', (d) => {
    //process.stdout.write(d);
    console.log('possible values')
    const possibleWords = filter(data, regex)
    console.log(possibleWords)
    new Engine(possibleWords)

  });

}).on('error', (e) => {
  console.error(e);
});

function filter(data,regex) {
  return data.split('\n').filter(d => regex.test(d) );
}

function Engine(words, input){

  const pos  = [1,2,3,4]

  let tempInput = input


  const _words = pos.map(a =>  {
    const _ = new LinkedWord(words[0], words,a,tempInput)

    return _
  
  })

  _words.forEach(element => {
    
  console.log(element.word)
  console.log(element.getAssciated())
  console.log(element.getAssciated())
  });

}

class LinkedWord{

  word
  words
  position
  input
   getAssciated = async function(){
    return this.words.filter(x => x[this.position] == this.word[this.position])
   }
 


  constructor(word, words,position){
    this.word = word
    this.words = words
    this.poition = position-1
    this.input = input
  }
}

