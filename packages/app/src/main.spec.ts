import {getHelpMe} from "./main.js";

describe('main', () => {
    test('help', () => {
        const a = getHelpMe()
        console.log('a', a)
        expect(a).toBe('helped')
    })
})