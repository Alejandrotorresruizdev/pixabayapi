import React from 'react'
import PropTypes from 'prop-types'
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    return (
        <div className= "col-12 p5 row">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
         </div>
    )
}

ListadoImagenes.propTypes = {

}

export default ListadoImagenes
