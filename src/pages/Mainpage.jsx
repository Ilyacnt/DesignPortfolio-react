import React from 'react'
import WorkCard from '../components/WorkCard'

const Mainpage = () => {
    const works = [
        {
            title: 'Дизайн интернет-магазина',
            description: 'Разработка дизайна для курсового проекта',
            img: [
                'https://i.pinimg.com/originals/04/3a/c1/043ac1c287a23e1f9be4f3b2b90e6d07.jpg',
                'https://pp.userapi.com/c844618/v844618323/177545/hjT9kCaf1oo.jpg',
                'https://p4.wallpaperbetter.com/wallpaper/647/969/308/anime-girls-leggings-original-characters-pantyhose-wallpaper-preview.jpg',
                'http://pm1.narvii.com/6879/0ab96fb3bec2b8d644f0db99cbd37ff56d2c6072r1-500-500v2_uhq.jpg',
                'https://listanime.ru/uploads/news_avatar/909_1.jpg',
                'https://image.winudf.com/v2/image/Y29tLmFuaW1lLmdpcmxzX3NjcmVlbnNob3RzXzBfZmRjZjFmMGY/screen-0.jpg?fakeurl=1&type=.jpg'
            ]
        },
        {
            title: 'Title',
            description: 'Description',
            img: [
                'https://i.pinimg.com/originals/2c/e1/9f/2ce19fe6b7c7b9125c023cbfc25953b6.jpg',
                'https://i1.sndcdn.com/artworks-000355104990-xfp9o2-t500x500.jpg',
                'https://pm1.narvii.com/7848/a2b31bd2289f2008ed7e091a6e07a64f62127582r1-500-500v2_00.jpg',
                'https://cdna.artstation.com/p/assets/images/images/037/617/002/large/helloimtea-zero-two-1-1k.jpg?1620845475',
                'https://en.memesrandom.com/wp-content/uploads/2021/02/cosplay-asuka-brasileira.jpg',
                'https://avatarfiles.alphacoders.com/306/thumb-1920-306193.jpg'
            ]
        },
    ]
    
    return (
        <>
            <div className="main-container">
                <p className='main-title'><b>Привет.</b> Меня зовут Илья, возможно я сделаю <b>твой дизайн.</b> Примеры некоторых моих работ ниже.</p>
            </div>
            {works.map((work, index) => (
                <WorkCard key={index} work={work}/>
            ))}
        </>
    )
}

export default Mainpage
