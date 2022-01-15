import React from 'react'
import WorkCard from '../components/WorkCard'

const Mainpage = () => {
    const works = [
        {
            title: 'Дизайн интернет-магазина',
            description: 'Разработка дизайна для курсового проекта',
            img: [
                'https://photocentra.ru/images/main64/642738_main.jpg',
                'https://northernfable.ru/upload/medialibrary/e7e/e7e2afca7a05bfd031f36300134e1296.jpg',
                'https://photocentra.ru/images/main44/446993_main.jpg',
                'https://mnogo-krolikov.ru/wp-content/uploads/2019/06/https-avatars-mds-yandex-net-get-pdb-1340633-f74-1024x681.jpeg'
            ]
        },
        {
            title: 'Title',
            description: 'Description',
            img: [
                '../img/projects/device_shop.jpg',
                '../img/projects/device_shop2.jpg',
                '../img/projects/device_shop3.jpg',
                '../img/projects/device_shop4.jpg'
            ]
        },
    ]
    
    
    return (
        <>
            {works.map((work, index) => (
                <WorkCard key={index} work={work}/>
            ))}
        </>
    )
}

export default Mainpage
