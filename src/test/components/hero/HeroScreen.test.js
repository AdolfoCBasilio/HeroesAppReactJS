import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../Components/hero/HeroScreen';

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <HeroScreen/>', () => {

    test('No debe de mostrar el HeroScreen si no hay un heroe en el url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <Routes>
                    <Route path='/heroe' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero pages</h1>} />
                </Routes>
            </MemoryRouter>
        )
        // console.log(wrapper.html())

        expect(wrapper.find('h1').text().trim()).toBe('No hero pages')
    });

    test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero pages</h1>} />
                </Routes>
            </MemoryRouter>
        )
        // console.log(wrapper.html())

        expect(wrapper.find('.row').exists()).toBe(true)
    });

    test('debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero pages</h1>} />
                </Routes>
            </MemoryRouter>
        )
        const ejecucion = wrapper.find('button').prop('onClick')
        ejecucion()
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    });

    test('debe de mostrar el no  hero page si no tenemos un heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider1234567890']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route path='/' element={<h1>No hero pages</h1>} />
                </Routes>
            </MemoryRouter>
        )
        // console.log(wrapper.html())

        expect(wrapper.text()).toBe('No hero pages')
    });
});