import { heroes } from "../data/heroes"

export const getHeroById =(id = '')=>{
    console.log('HeroeiD',id)
    return heroes.find(hero=>hero.id === id)
}