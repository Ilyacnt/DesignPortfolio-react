import React from 'react'
import WorkCard from '../components/WorkCard'

const Mainpage = () => {
    const works = [
        {
            title: 'Дизайн интернет-магазина',
            description: 'Разработка дизайна для курсового проекта',
            img: [
                'https://www.meme-arsenal.com/memes/85e5ea4117c51f3ebf97ed43de74d509.jpg',
                'https://pp.userapi.com/c844618/v844618323/177545/hjT9kCaf1oo.jpg',
                'https://coub-anubis-a.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/2b1af998027/ea09166d133dff7fbcd8d/med_1589558379_image.jpg',
                'http://pm1.narvii.com/6879/0ab96fb3bec2b8d644f0db99cbd37ff56d2c6072r1-500-500v2_uhq.jpg',
                'https://listanime.ru/uploads/news_avatar/909_1.jpg',
                'https://i.pinimg.com/564x/89/33/44/89334429922809d274915d9a1f382027.jpg'
            ]
        },
        {
            title: 'Title',
            description: 'Description',
            img: [
                'https://anime-chan.me/uploads/posts/2020-11/1604253954_ihdroklb-he.jpg',
                'https://i.pinimg.com/736x/fa/74/f4/fa74f4628acca51e0f1619489516eeb6.jpg',
                'https://i.pinimg.com/550x/54/a4/e3/54a4e35728cb110e2689035aa099a683.jpg',
                'https://klike.net/uploads/posts/2020-07/1595663824_1.jpg'
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
