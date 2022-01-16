import React from 'react'
import { Link } from "react-router-dom";

const Footer = (isContactsPage) => {
    return (
        <footer className="footer">
            {!isContactsPage 
            ? 
            <Link to={'/'}>На главную</Link>
            :
            <Link to={'/contacts'}>Заказать дизайн</Link>
        }
        </footer>
    )
}

export default Footer
