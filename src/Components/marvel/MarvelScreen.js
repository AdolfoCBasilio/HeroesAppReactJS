import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  // console.log('marvelScreen')
  return (
    <div>
      <h1>MarvelScreen</h1>
      <HeroList publisher="Marvel Comics"/>
    </div>
  )
}
