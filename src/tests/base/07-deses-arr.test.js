import { retornaArreglo } from "../../base/07-deses-arr";
import '@testing-library/jest-dom'


describe('Pruebas en 07 desestructuracion', () => {
    test('debe de retornar un string y un numero', () => {
        // Este esta bien 
        // const arr = retornaArreglo();
        // expect(arr).toEqual(['ABC', 123])
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect( typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect( typeof numeros).toBe('number');
        
    })
    
});