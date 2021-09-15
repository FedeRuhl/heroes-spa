import React, { useMemo } from 'react';
import { heroes } from '../../data/heroes';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = () => {

    const history = useHistory();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    
    const initialForm = {
        input_search: q,
    };
    
    const [ values, handleInputChange ] = useForm(initialForm);
    const { input_search } = values;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${input_search}`)
    };

    return (
        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-md-5">
                    <h4>Search form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            name="input_search"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            value={ input_search }
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                        <button 
                            type="submit"
                            className="btn btn-block btn-outline-primary m-1"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-md-7">
                    <h4>Results</h4>
                    <hr />

                    { 
                        (q === '')
                        ? <div className="alert alert-info">Search a hero</div>
                        : ''
                    }

                    { 
                        (q !== '' && heroesFiltered.length === 0)
                        ? <div className="alert alert-danger">There is no a heri with { q } name</div>
                        : ''
                    }

                    {
                        heroesFiltered.map(hero => 
                        <HeroCard
                            key={ hero.id }
                            hero={ hero }
                        />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default SearchScreen
