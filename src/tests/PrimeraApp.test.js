import { render } from "@testing-library/react";
import React from "react";
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom'
import { shallow } from "enzyme";

describe('Pruebas en primera app', () => {
    // test('debe de mostrar el mensaje "Hola soy goku" ', () => {
    //     const saludo = "Hola, Soy Goku!";
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe de mostrar primera app correctamente ', () => {
        const saludo = "Hola, Soy Goku";
        const wrapper = shallow(<PrimeraApp saludo = {saludo} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = "Hola, Soy Goku";
        const subtitulo = `Soy un subtitulo`;
        const wrapper = shallow(
            <PrimeraApp
                saludo = {saludo}
                subtitulo = {subtitulo}  />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo.trim()).toBe(subtitulo.trim());
    });
    
});