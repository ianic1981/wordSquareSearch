import { wordSquareSearch } from "../wordSquareSearch";

globalThis.words = [
    'deed', 'deer', 'dees', 'dene', 'dens', 'dere', 'devs',
    'dodo', 'doer', 'does', 'done', 'dons', 'door', 'dore',
    'dorr', 'dors', 'dose', 'doss', 'dove', 'dree', 'eddo',
    'ends', 'eons', 'erne', 'erns', 'eros', 'errs', 'eses',
    'even', 'ever', 'eves', 'need', 'nene', 'neon', 'nerd',
    'ness', 'neve', 'node', 'nods', 'noes', 'none', 'noon',
    'nose', 'odds', 'odes', 'odor', 'ones', 'ordo', 'ores',
    'oses', 'oven', 'over', 'redd', 'rede', 'redo', 'reds',
    'reed', 'rees', 'rend', 'revs', 'rode', 'rods', 'roes',
    'rood', 'rose', 'rove', 'seed', 'seen', 'seer', 'sees',
    'send', 'sene', 'sere', 'sers', 'sned', 'sods', 'sone',
    'sons', 'soon', 'sord', 'sore', 'sorn', 'veer', 'vees',
    'vend', 'voes'
]

globalThis.size = 4

test('wordSquareSearch for valid start value should retun puzzel', () => {
    expect(wordSquareSearch("eeeeddoonnnsssrv", "rose", 4)).toEqual({ "rows": [{ "value": "rose" }, { "value": "oven" }, { "value": "send" }, { "value": "ends" }], "validLetters": "" });
});

test('wordSquareSearch for invalid start value should not retun puzzel', () => {
    expect(wordSquareSearch("eeeeddoonnnsssrv", "rods", 4)).toEqual(undefined);
});