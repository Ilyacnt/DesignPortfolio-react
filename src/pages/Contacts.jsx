import React from 'react'
import { ReactComponent as TelegramLogo} from "../img/svg/contacts/Telegramm-logo.svg"
import { ReactComponent as VKLogo} from "../img/svg/contacts/vk-logo.svg"
import { ReactComponent as GmailLogo} from "../img/svg/contacts/gmail-logo.svg"
import { ReactComponent as WhatsAppLogo} from "../img/svg/contacts/whats-app-logo.svg"

const Contacts = () => {
    return (
        <div className="main-container">
            <h1>Связь со мной.</h1>
            <div className="contact-card">
                <h2 className='contact-card-h2'>Пишите все идеи и предложения.</h2>
                <div className='contact-card-logos'>
                    <a href='#' className='contact-card-logo'><TelegramLogo/></a>
                    <a href='#' className='contact-card-logo'><VKLogo/></a>
                    <a href='#' className='contact-card-logo'><GmailLogo/></a>
                    <a href='#' className='contact-card-logo'><WhatsAppLogo/></a>
                </div>
            </div>
        </div>
    )
}

export default Contacts
