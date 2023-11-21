import PropTypes from 'prop-types';

export const CountApp = ({value}) => {
    return (
        <>
            <h1>Count App</h1>
            <h2>{ value }</h2>
        </>
    );
};

CountApp.propTypes = {
value: PropTypes.number.isRequired
};