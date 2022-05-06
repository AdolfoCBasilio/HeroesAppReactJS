import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import { Navbar } from '../../../Components/ui/Navbar';
import { AuthContext } from '../../../auth/authContext'
import { types } from '../../../types/types';

//! shallow para componente sencillo
//! moun cuando son mas componentes

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Pedro',
            logged: true
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('Se debe mostrar correctamente', () => {
        console.log(wrapper.html())
        // Mandar el nombre de pedro como contextValue Pedro
        // Crear un Snapshot del componente
        // Buscar en .text-info el nombre: pedro y que conincida
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro')
    });

    test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {
        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledWith({ 'type': types.logout })
        expect(mockNavigate).toHaveBeenCalledWith("/login", {"replace": true})
    });
});