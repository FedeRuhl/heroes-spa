import React from 'react';
import { Redirect, Switch, Route } from 'react-router';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel">
                        <MarvelScreen />
                    </Route>
                    <Route exact path="/hero/:heroId">
                        <HeroScreen />
                    </Route>
                    <Route exact path="/dc">
                        <DcScreen />
                    </Route>
                    <Route exact path="/search">
                        <SearchScreen />
                    </Route>

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    );
};

export default DashboardRoutes;