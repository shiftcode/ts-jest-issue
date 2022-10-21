import { multiply} from "./util.js";

describe('util', () => {

    test('should multiply', () => {
        const result = multiply(2,3)
        expect(result).toBe(6)
    })

})