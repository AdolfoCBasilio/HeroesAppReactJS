import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../auth/authContext'
import {types} from '../../types/types'
export const Navbar = () => {

    const { user ,dispatch } = useContext(AuthContext)

    // console.log('=>>>>>>>>>>>>', user.name)

    const navigate = useNavigate();

    const handleLogOut = () => {
        //dispatch
        dispatch({type:types.logout})

        navigate('/login', {replace: true})
    }

    // console.log('NAVBAR')
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => {
                            return 'nav-item nav-link'
                        }}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}