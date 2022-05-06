import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    });

    test('debe de autentificar y colocar el "name" del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'ADOLFO'
            }
        }
        const state = authReducer({logged:false}, action)
        expect(state).toEqual({
            logged:true,
            name:'ADOLFO'
        })
    });

    test('Debe de borrar el name y logged:false', () => {
        const action={
            type:types.logout
        }
        const state = authReducer({},action)
        expect(state).toEqual({
            logged:false,
        })
    });

});