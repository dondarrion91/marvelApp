import React from "react";
import PropTypes from 'prop-types';

const Imagen = ({imagen}) => {
        
    return (
        <img                                      
            src={!(imagen + "/portrait_small.jpg") ? "https://cardiologiaroca.com/wp-content/uploads/2015/11/sin-foto.png" : imagen + "/portrait_small.jpg"} 
            alt=""
        />
    );    
};

Imagen.propTypes = {
    imagen: PropTypes.string.isRequired,    
}

export default Imagen;