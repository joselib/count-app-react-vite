import {useState} from 'react';
import PropTypes from 'prop-types';

export const CountApp = ({ value }) => {

    const [ counter, setCounter] = useState( value )

    const handleAdd = (event) => {
        
        //console.log(event)
        setCounter( counter + 1)
        //setCounter( (c) => c + 1)

    }
    

    return (
        <>
            <h1>Count App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd}>
                +1
            </button>
        </>
    );
};

CountApp.propTypes = {
value: PropTypes.number.isRequired
};