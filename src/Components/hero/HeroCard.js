import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const herosImages = require.context('../../assets/', true) // true para buscar en subdirectorios
    // const imagePath = `/assets/${id}.jpg`; // path de la imagen
    const imagePath = herosImages(`./${id}.jpg`); // path de la imagen
    // console.log('HEROCARD')
    return (
        <div className='col'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={imagePath} className="card-img" alt={superhero} />
                        {/* <img src={require('../ruta.png)} className="card-img" alt={superhero} /> */}
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-tittle'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className='text-muted'>{characters}</p>
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
