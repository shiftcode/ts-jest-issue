import {getHelpMe} from "./main.mjs";

describe('main', () => {
    test('help', () => {
        expect(getHelpMe()).toBe('asdf')
    })
})