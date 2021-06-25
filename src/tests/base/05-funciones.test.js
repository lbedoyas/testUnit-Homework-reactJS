import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom'

describe('Pruebas en 05 funciones', () => {
    test('Debe de retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();    
        expect(user).toEqual(userTest)
    })

    test('getUsuarioActivo debe retornar un objeto ', () => {
        const name = 'Luis'
        const userActive = getUsuarioActivo(name)
        //console.log(userActive);
        expect(userActive).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
    
    
});