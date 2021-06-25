import { getHeroeByIdAsync } from "../../base/09-promesas";
import '@testing-library/jest-dom'
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('debe retornar un heroe async ', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test('Debe obtener un mensaje de error si un heroe por id no existe', (done) => {
        const id  = 10;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    })
    
    
});