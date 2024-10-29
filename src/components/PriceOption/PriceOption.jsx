import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-300 rounded-md p-4 text-slate">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-5">
                {name}
            </h4>
            <div className="pl-6">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-blue-600 text-white">Buy now</button>
        </div>
    );
};




PriceOption.propTypes = {
    option: PropTypes.object
}



export default PriceOption;