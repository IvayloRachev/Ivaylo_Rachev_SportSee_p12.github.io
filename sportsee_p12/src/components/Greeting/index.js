import PropTypes from 'prop-types';

function Greeting({ firstname, motivationalSpeech }) {
    return (
        <div>
            <h2 className='greeting'>
                Bonjour
                <span className='firstname'> {firstname}</span>
            </h2>
            <p className='motivationalSpeech'>{motivationalSpeech}</p>
        </div>
    )
}

Greeting.propTypes = {
    firstname: PropTypes.string.isRequired,
    motivationalSpeech: PropTypes.string.isRequired,
};

export default Greeting;