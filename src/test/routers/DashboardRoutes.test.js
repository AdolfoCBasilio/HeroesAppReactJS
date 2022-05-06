import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routes/DashboardRoutes";


describe('Pruebas en <DasboardRoutes/>', () => {
    const contextValue = {
        user: {
            logge: true,
            name: 'juanito'
        }
    }
    test('debe de mostrarse correctamente', () => {
        const wrapper = mount(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // console.log(wrapper.html())
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('juanito')
    });

    test('debe de mostrarse correctamente Marvel', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // console.log('MARVEL======>', wrapper.html())
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').first().text().trim()).toBe('MarvelScreen')
    });

    test('debe de mostrarse correctamente Dc', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // console.log('DC======>', wrapper.html())
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').at(0).text().trim()).toBe('DcScreen')
    });
});