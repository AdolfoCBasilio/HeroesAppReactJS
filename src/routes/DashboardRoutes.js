import { Route, Routes } from "react-router-dom"

import { Navbar } from "../Components/ui/Navbar"

import { MarvelScreen } from '../Components/marvel/MarvelScreen'
import { DcScreen } from '../Components/dc/DcScreen'
import { SearchScreen } from '../Components/search/SearchScreen'
import { HeroScreen } from '../Components/hero/HeroScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />

                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
