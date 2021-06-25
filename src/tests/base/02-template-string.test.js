import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom'

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar hola y el nombre ', () => {
        const nombre = 'Luis';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })

    test('debe retornar hola lucia si no hay argumentos ', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola ' + 'Lucia')
    })
    
    
});