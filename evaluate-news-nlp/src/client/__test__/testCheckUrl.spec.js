import { URLValidation } from '../js/urlValidation';

describe('testing if the input url is valid or not',()=>{

    test('test the function should be exist and should return true',()=>{
        expect(URLValidation).toBeDefined();
    })

    test('return true if the input url is valid',()=>{
        expect(URLValidation('https://www.udacity.com')).toBeTruthy();
    });

    test('return false if the input url is not valid',()=>{
        expect(URLValidation('udacity.')).toBeFalsy();
    })
})