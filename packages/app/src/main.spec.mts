import {needHelp} from "./main.mjs"
import {promisify} from 'node:util'
import {nodeMaxHeaderSize} from '@lab/commons/helpers'

function gimmeSomething(no: number){
    return no
}

describe('main', () => {

    beforeAll(async () => {
        await promisify(setTimeout)(200)
        console.log('beforeAll -> done')
    })

    test('match output', () => {
        expect(needHelp()).toBe('i am here to help')
        expect(gimmeSomething(5)).toBe(5)
    })

    test('deep import', () => {
        expect(nodeMaxHeaderSize()).toBeGreaterThan(0)
    })
})