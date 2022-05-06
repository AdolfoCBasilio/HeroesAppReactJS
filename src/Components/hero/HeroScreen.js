import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {
  // console.log('HEROSCREEN')

  const { heroeId } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(heroeId), [heroeId])

  if (!hero) {
    return <Navigate to='/' />
  }

  const { id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, } = hero;
  // const herosImages = require.context('../../assets/', true)
  const imagePath = `/assets/${id}.jpg`
  // const imagePath = herosImages(`./${id}.jpg`);

  const handleReturn = () => {
    navigate(-1)
  }
  return (
    <div className='row mt-5'>
      <div className='col-4' style={{ display: 'flex' }}>
        <img src={imagePath} alt={superhero} className='img-thumbnail animate__fadeInLeft' />

        <div className='col-8' >
          <h3 >{superhero}</h3>
          <ul className='list-group list-group-flush '>
            <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
            <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
            <li className='list-group-item'><b>First Appeareance: </b>{first_appearance}</li>
          </ul>
          <h5>Characters</h5>
          <p>{characters}</p>
          <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>
        </div>

      </div>
    </div>
  )
}
