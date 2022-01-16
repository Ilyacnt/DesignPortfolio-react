import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Image = ({src, alt, className}) => {
    const [modal, setModal] = useState(false)
    const [tempImageSrc, setTempImageSrc] = useState('')


    const getImage = (imgSrc) => {
        setTempImageSrc(imgSrc)
        setModal(true)
    }
    
    return (
        <>
            {modal && 
            <div 
                className='project-image_modal'
                onClick={() => setModal(false)}
            >
                <img src={src} alt={alt} />
            </div>
            }
            <div className="img-crop">
                <img
                    src={src}
                    alt={alt}
                    className='project-image'
                    onClick={() => {getImage(src)}}
                />
            </div>
        </>
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}

Image.defaultProps = {
    src: 'https://via.placeholder.com/500',
    alt: 'image not found',
    className: ''
}

export default Image
