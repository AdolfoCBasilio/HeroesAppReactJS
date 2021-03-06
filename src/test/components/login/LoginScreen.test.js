import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import { AuthContext } from '../../../auth/authContext'
import { types } from '../../../types/types';
import { LoginScreen } from '../../../Components/login/LoginScreen';

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <LoginScreen/>', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='/login' element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('debe de  realizar el dispatch y la navegacion', () => {
        // dispatch(...{nane:'adolfo'});
        //mockNavigate = (/marvel,{replace:true})

        //Localstorage.setItem('lasPath','/dc')

        // handleClick
        //mockNavigate..('/dc',{replace:true})
        const handleClikc = wrapper.find('button').prop('onClick');
        handleClikc();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'adolfo' }
        })

        expect(mockNavigate).toHaveBeenCalledWith('/Marvel', { replace: true })

        localStorage.setItem('lastPath','/dc')
        handleClikc();
        expect(mockNavigate).toHaveBeenCalledWith('/dc',{replace:true})
    });

});