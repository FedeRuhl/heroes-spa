import React from 'react'
import { Link } from 'react-router-dom';

const HeroCard = ({ hero }) => {

    const { id, superhero, alter_ego, first_appearance, characters } = hero;
    const heroImages = require.context('../../assets/heroes', true);

    return (
        <div className="col-md-6 mt-4">
            <div className="card">
                <img 
                    // src={ `assets/heroes/${id}.jpg` } 
                    src={ heroImages(`./${ id }.jpg`).default }
                    className="card-img-top" 
                    alt={ superhero }
                    height="400" 
                />
                <div className="card-body">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">{ alter_ego }</p>
                    {
                        (alter_ego !== characters)
                            ? <p className="card-text">{ characters }</p>
                            : ''
                    }
                    <p className="card-text">
                        <small className="text-muted">{ first_appearance }</small>
                    </p>
                    <Link to={`hero/${id}`}>
                        More...
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
