import React from 'react'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'

const WorkCard = ({work}) => {

    const breakpointColumnsObj = {
        default: 3,
        1980: 3,
        700: 1,
      }

    return (
        <div className="main-container">
            <div className="work-card">
                <h2>{work.title}. <span className="work-description">{work.description}.</span></h2>
                <Masonry
                    style={{paddingBottom: '10px'}}
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {work.img.map((src) => (
                        <img key={src} src={src} alt={work.title + ' image'} className="project-image"></img>
                    ))}
                </Masonry>
                <Link className='work-more-btn' to={'/'}>Подробнее...</Link>
            </div>
        </div>
    )
}

export default WorkCard
