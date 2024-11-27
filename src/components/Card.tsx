
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import image from "../../image/avatart.webp"

const Card = () => {
    return (
        <div id="card" className='comic-neue-regular '>
            <div id="credentials">
                <div id="hero">
                    <div id="userinfo" className='comic-neue-cred '>
                        <h1>Julie</h1>
                        <h1>@astrojulie</h1>

                    </div>

                    {/* description */}
                    <div id="about">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consectetur mollitia magni omnis impedit eveniet beatae saepe provident </p>
                    </div>

                    {/* rewards */}
                    <div id="achievements">
                        <div>

                            <h1 className='comic-neue-number'>32</h1>
                            <h1>issues</h1>
                        </div>
                        <div>

                            <h1 className='comic-neue-number'>32</h1>
                            <h1>bounties</h1>
                        </div>
                        <div>

                            <h1 className='comic-neue-number'>32</h1>
                            <h1>challenges</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is for avatar section */}
            <div id="avatar">
                <img src={image} alt="this is avatar" />
                <div id="socialLinks">
                    <h1><BsGithub /></h1>
                    <h1><BsLinkedin /></h1>
                </div>

            </div>
        </div>
    )
}

export default Card
