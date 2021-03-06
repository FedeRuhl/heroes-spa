import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';
import { useHistory } from 'react-router-dom';

const heroImages = require.context('../../assets/heroes', true);

const HeroScreen = () => {

    const { heroId } = useParams();
    const history = useHistory();
    const hero = useMemo(
        () => getHeroById(heroId),
        [ heroId ]
    );

    if (!hero){
        return <Redirect to="/" />
    }


    const handleBack = () => {
        if (history.length <= 2)
            history.push('/');
        else
            history.goBack();
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <img
                    // src={ `../../../assets/heroes/${heroId}.jpg` }
                    // src={ `/assets/heroes/${heroId}.jpg` } // from public/assets
                    src={ heroImages(`./${ heroId }.jpg`).default }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-md-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b> { first_appearance }
                    </li>
                    <li className="list-group-item">
                        <b>Characters: </b> { characters }
                    </li>
                </ul>
                <button 
                    className="btn btn-outline-info mt-2"
                    onClick={ handleBack }
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default HeroScreen;