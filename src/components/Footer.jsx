import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="ftr-section">
            <div className="ftr-content">
                <div className="column">
                    <div>
                        <h2 className="ftrheading">SARV KALYANAM SAMITI</h2>
                        <p>Sarv Kalyanam Samiti, based in Jhansi, is a dedicated organization committed to the welfare
                            and
                            development of society.
                            Our mission is to enhance the quality of life for individuals...</p>
                        <button className="button3" type="submit">Know More</button>
                    </div>

                </div>
                <div className="column">
                    <h5>Campaigns</h5>
                    <hr className="line"/>
                    <li><FontAwesomeIcon  icon="fa-solid fa-play"></FontAwesomeIcon> Differently abled</li>
                    <li><FontAwesomeIcon  icon="fa-solid fa-play"></FontAwesomeIcon> Child cancer</li>
                    <li><FontAwesomeIcon  icon="fa-solid fa-play"></FontAwesomeIcon> Nigerian girls</li>
                    <li><FontAwesomeIcon  icon="fa-solid fa-play"></FontAwesomeIcon> Child Education</li>
                    <li><FontAwesomeIcon  icon="fa-solid fa-play"></FontAwesomeIcon> Other children</li>

                </div>
                <div className="column">
                    <h5> Contact Us</h5>
                    <hr className="line"/>
                    <li><FontAwesomeIcon icon="fa-solid fa-location-dot"></FontAwesomeIcon> <b>Office Address:</b>  Estuti Villa, S-26, K.K. Puri Colony, Nandanpura, Jhansi </li>
                    <li><Link to="tel:+9889003089"><FontAwesomeIcon icon="fa-solid fa-phone-volume"></FontAwesomeIcon>+91 9889003089</Link></li>
                    <li><FontAwesomeIcon className="font-icon" icon="fa-solid fa-envelope-open-text"></FontAwesomeIcon> Jhansisks@gmail.com </li>


                </div>
                <div className="column">
                    <h5> Subscribe</h5>
                    <hr className="line"/>
                    <li><FontAwesomeIcon icon="fa-solid fa-play"></FontAwesomeIcon> Be the first one to receive latest updates.</li>
                    <div className="joinus">
                        <input type="email" placeholder="Write Your Gmail Here.."/>
                        <button className="button3" type="submit"><FontAwesomeIcon icon="fa-solid fa-paper-plane"></FontAwesomeIcon></button>
                    </div>
                    <div className="social pd-top">
                        <Link to="https://www.facebook.com/profile.php?id=61561172777789" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-facebook"></FontAwesomeIcon></Link>

                        <Link to="https://www.youtube.com/channel/UCSQOb_r2BiKFMYs1JUn7XGw" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-youtube"></FontAwesomeIcon></Link>
                        <Link to="https://www.instagram.com/invites/contact/?igsh=8t27gcuhq4vn&utm_content=v3lasmp" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-instagram"></FontAwesomeIcon></Link>
                        <Link to="https://x.com/SKSJhansi0197" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-x-twitter"></FontAwesomeIcon></Link>
                    </div>
                  </div>
                </div>
            </div>
        <div className="ftr-bottom">
                <p>
                    © 2024 Sarv Kalyanam Samiti, Jhansi. All Rights Reserved.| Designed & Maintained by: 
                    <Link to="https://digivantage.in" target="_blank">DIGITAL VANTAGE</Link>
                </p>
        </div>

    </footer>
    </>
  )
}

export default Footer