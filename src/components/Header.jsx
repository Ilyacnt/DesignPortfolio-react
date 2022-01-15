import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as DropdownArrow} from "../img/svg/DropdownArrow.svg"

export const Header = () => {
    const [dropdownActive, setDropdownActive] = useState(false)

    return (
            <header className='header'>
                <div className='header-wrapper'>
                    <Link to='/contacts' className='header-button'>Заказать дизайн</Link>
                    <div 
                        className='header-wrapper-groupname' 
                        onClick={() => setDropdownActive(!dropdownActive)}
                    >
                        <DropdownArrow/>
                        <h1>Ilya Baranchikov</h1>
                        <img src={require('../img/Avatar.png')}/>
                            
                            <nav className={dropdownActive ? 'header-dropdown header-dropdown_active' : 'header-dropdown '}>
                                <Link to='/works'>Работы</Link>
                                <Link to='/skills'>Навыки</Link>
                                <Link to='/'>ENG</Link>
                            </nav>
                    </div>
                    
                </div>
            </header>
    )
}
