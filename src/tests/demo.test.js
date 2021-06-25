
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('debe de ser iguales los stirngs ', () => {
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
        expect(mensaje).toBe(mensaje2);
    })

});
