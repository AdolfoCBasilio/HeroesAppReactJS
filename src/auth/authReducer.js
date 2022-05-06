
// const state={
//     name:'adolfo',
//     logged:true,
// }

// export const types ={
//     login:'[auth] Login',
//     logout:'[auth] Logout',
// }

// const loginAction={
//     type:types.login,
//     payload:{
//         name:'adolfo',
//         email:'asdf@asdf.com'
//     }
// }

import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                ...action.payload, //* name: action.payload.name,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state;

    }
}