import { useMemo } from "react";
import { getHerosByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
// console.log('HERLIST')
    const heroes = useMemo(()=> getHerosByPublisher(publisher),[publisher])

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__fadeInLeft">
            <h1>HeroList - {publisher}</h1>

            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }

        </div>
    )
}
