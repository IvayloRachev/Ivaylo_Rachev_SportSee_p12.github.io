import PropTypes from 'prop-types';
import './index.css'

/**
 * @param {number} data - The data for the nutrient
 * @param {string} name - The name of the nutrient
 * @param {string} className - The className for the nutrien styyle
 * @param {url} icon - The URL to call the nutrint icon
 * @returns The NutrintCard component returns a card with information about the user's nutrients
 */
function NutrientCard({ data, name, className, icon }) {
    return (
        <div className='nutrient'>
            <div className={`nutrient__icon ` + className}>
                <img src={icon} alt="icone des nutriments" />
            </div>
            <div className='nutrient__informations'>
                <p className='nutrient__quantity'>
                    {data}
                    <span>{name === 'Calories' ? 'Kcal' : 'g'}</span>
                </p>
                <p className='nutrient__name'>{name}</p>
            </div>
        </div>
    )
}

NutrientCard.propTypes = {
    data: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default NutrientCard