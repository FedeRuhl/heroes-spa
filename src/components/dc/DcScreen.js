import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {

    const publisher = 'DC Comics';

    return (
        <>
            <h1>DC SCREEN</h1>
            <hr />
            <HeroList publisher={ publisher } />
        </>
    );
};

export default DcScreen;