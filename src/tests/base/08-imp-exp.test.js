import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
import '@testing-library/jest-dom';

describe('Pruebas en funciones de heroes', () => {
    test('debe de retornar un heroe por id  ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar un undefined si heroe no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un array con los heroes de DC ', () => {
        const owner = 'DC';
        const result = getHeroesByOwner(owner);
        const heroesMarvel = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
        expect(result).toEqual(heroesMarvel)
    });

    test('debe de retornar un array con los heroes de marvel ', () => {
        const owner = 'Marvel';
        const resultLength = getHeroesByOwner(owner).filter(i => i.owner);
        expect(resultLength.length).toBe(2);
    });


});