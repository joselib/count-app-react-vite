import {useState} from 'react';
import PropTypes from 'prop-types';

export const CountApp = ({ value }) => {

    const [ counter, setCounter] = useState( value )

    const handleAdd = (event) => {
        
        //console.log(event)
        setCounter( counter + 1)
        //setCounter( (c) => c + 1)

    }
    
    const handSubstract = (event) => {
        if (counter > 0) {
            setCounter( counter - 1)
        }else{
            setCounter(0)
        }
    }
    const handleReset = (event) => setCounter(value)

    return (
        <>
            <h1>Count App</h1>
            <h2> { counter } </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

CountApp.propTypes = {
value: PropTypes.number.isRequired
};