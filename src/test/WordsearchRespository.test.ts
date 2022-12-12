import { WordsearchRespository } from "../wordsearchRespository";

import * as http from 'node:http'

jest.mock('node:http')


const emitter: any = (url: any, fn: (arg0: { on: (event: string, fun: Function) => void; }) => void) => {

    const eventMap = {}

    fn({
        on: function (event: string, fun: Function) {
            eventMap[event] = fun
        }
    })

    eventMap['data']("rose,oven,send,Ends")
    eventMap['end']()


}

//http.get = jest.spyOn(http, 'get').mockReturnValue(emitter)

http.get = jest.fn(emitter)


test('wordSquareSearch for valid start value should retun puzzel', () => {
    expect(new WordsearchRespository("eeeeddoonnnsssrv", 4).findRelevantWords()).toEqual([]);
});
