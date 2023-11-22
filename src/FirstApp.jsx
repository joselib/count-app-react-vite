import PropTypes from 'prop-types';


export const FirstApp = ({title, subTitle, name}) => {



    return (
        <>
            <h1>{title}</h1>
            <h2>{name}</h2>
            <p>{subTitle}</p>

        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

//defaultProps
FirstApp.defaultProps = {
    subTitle: "NO hay un subtitulo",
    title: "No hay un titulo",
    name: "no hay nombre"
};