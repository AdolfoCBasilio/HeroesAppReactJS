import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routes/AppRouter";

describe('Pruebas en <AppRouter/>', () => {
    
    test('Debe de mostrar login si no esta autenticado', () => {
        const contextValue = {
            user: {
                logged: false
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        // console.log(wrapper.html())
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('LoginScreen');
    });
   
    test('debe mostrar el componente de marvel si esta autenticado', () => {
        const contextValue = {
            user: {
                logged: true,
                name:'pepe'
            }
        }
        const wrapper= mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        // console.log(wrapper.html())
        expect(wrapper).toMatchSnapshot();
        // expect(wrapper.find('.navbar').text().trim()).toBe('AsociacionesMarvelDCSearchpepeLogout')
        expect(wrapper.find('.navbar').exists()).toBe(true)
    });

});