import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {

    const publisher = 'Marvel Comics'

    return (
        <>
            <h1>MARVEL SCREEN</h1>
            <hr />
            <HeroList publisher={ publisher } />
        </>
    );
};

export default MarvelScreen;