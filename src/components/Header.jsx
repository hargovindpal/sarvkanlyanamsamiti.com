import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  return (
    <>
    <div className="header-top">
        <div className="top-element contact">
            <li><Link className="link" to="tel:+9889003089"><FontAwesomeIcon className="font-icon" icon="fa-solid fa-phone-volume"></FontAwesomeIcon>+91 9889003089</Link></li>

            <li><Link to=""><FontAwesomeIcon className="font-icon" icon="fa-solid fa-envelope-open-text"></FontAwesomeIcon> Jhansisks@gmail.com</Link></li>
        </div>
        <div className="top-element top-social social">
            <Link className="link" to="https://www.facebook.com/profile.php?id=61561172777789" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-facebook"></FontAwesomeIcon></Link>
            <Link className="link" to="https://www.youtube.com/channel/UCSQOb_r2BiKFMYs1JUn7XGw" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-youtube"></FontAwesomeIcon></Link>
            <Link className="link" to="https://www.instagram.com/invites/contact/?igsh=8t27gcuhq4vn&utm_content=v3lasmp" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-instagram"></FontAwesomeIcon></Link> 
            <Link className="link" to="https://x.com/SKSJhansi0197" target="_blank"><FontAwesomeIcon className="font-icon" icon="fa-brands fa-x-twitter"></FontAwesomeIcon></Link>
        </div>
    </div>
    <header id="head">
        <div className="logo">
            <Link className="link" to="/Home"><img src="src/assets/icons/logo.png"/></Link>
        </div>
        <div className="logo-text">
            <h1>SARV KALYANAM SAMITI</h1>
            <h4>DEDICATED TO SOCIAL AND CULTURAL DEVELOPMENT</h4>
        </div>
        
            <button onClick="window.location.href='/Donate'" className="button3" id="button1">DONATE NOW</button>
        
    </header>

    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">

                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="link nav-link active" aria-current="page" href="index.html">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="link nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"aria-expanded="false"> ABOUT</Link>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="link dropdown-item" href="IntroductionToSKS.html">INTRODUCTION TO SKS</Link></li>
                                <li><Link className="link dropdown-item" href="ourvision.html">MISSION & VISION</Link></li>
                                <li><Link className="link dropdown-item" href="Patron'sMessage.html">PATRON'S MESSAGE</Link></li>
                                <li><Link className="link dropdown-item" href="President'sMessage.html">PRESIDENT'S MESSAGE</Link></li>
                                <li><Link className="link dropdown-item" href="Manager'sMessage.html">MANAGER'S MESSAGE</Link></li>
                                <li><Link className="link dropdown-item" href="Objectives.html">OBJECTIVES</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                              <Link className="link nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                EVENTS
                              </Link>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="link dropdown-item" href="UpcomingEvents.html">UPCOMING EVENTS</Link></li>
                                <li><Link className="link dropdown-item" href="CompletedProject .html">COMPLETED EVENTS</Link></li>
                                <li><Link className="link dropdown-item" href="EventGallery.html">EVENTS GALLERY</Link></li>
                                <li><Link className="link dropdown-item" href="NewspapeCips.html">NEWSPAPER CLIPS</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="link nav-link  active" aria-current="page" href="ourteam.html">OUR TEAM</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="link nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                DONATE
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="link dropdown-item" href="WhyDonate.html">WHY DONATE?</Link></li>
                                <li><Link className="link dropdown-item" href="HowourDonationHelps.html">HOW YOUR DONATION HELPS</Link>
                                </li>
                                <li><Link className="link dropdown-item" href="donate.html">DONATE NOW</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="link nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                DOWNLOADS
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="link dropdown-item" href="SocietyRegistration .html">SOCIETY REGISTRATION</Link>
                                </li>
                                <li><Link className="link dropdown-item" href="DonationForm.html">DOWNLOAD FORMS</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="link nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                JOIN US
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="link dropdown-item" href="BenefitsofJoining.html">BENEFITS OF JOINING</Link></li>
                                <li><Link className="link dropdown-item" href="HowtoJoin.html">HOW TO JOIN</Link></li>
                                <li><Link className="link dropdown-item" href="VolunteerOpportunities.html">VOLUNTEER
                                        OPPORTUNITIES</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="link nav-link  active" aria-current="page" href="contact.html">CONTACT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link nav-link  active" aria-current="page" to='/Faqs'>FAQ</Link>
                        </li>

                    </ul>
                    <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>

    <nav className="nav">
        <ul>
            <li><Link className="link" to="/Home"><FontAwesomeIcon className="font-icon" icon="fa-solid fa-house"></FontAwesomeIcon></Link></li>
            <li>
                <Link className="link" to="#">About</Link>
                <ul className="sub-menu">
                    <li><Link className="link" to="/introduction">Introduction to SKS</Link></li>
                    <li><Link className="link" to="/MissionVision">Mission & Vision</Link></li>
                    <li><Link className="link" to="/PatronMessage">Patron's Message</Link></li>
                    <li><Link className="link" to="/PresidentMessage">President's Message</Link></li>
                    <li><Link className="link" to="/ManagerMessage">Manager's Message</Link></li>
                    <li><Link className="link" to="/Objectives">Objectives</Link></li>
                </ul>
            </li>
            <li>

                <Link className="link" to="#">Events</Link>
                <ul className="sub-menu">
                    <li><Link className="link" to="/UpcomingEvents">Upcoming Events</Link></li>
                    <li><Link className="link" to="CompletedProject .html">Completed Projects</Link></li>
                    <li><Link className="link" to="EventGallery.html">Event Gallery</Link></li>
                    <li><Link className="link" to="/NewsPaperClips">Newspaper clips </Link></li>
                </ul>
            </li>
            <li><Link className="link" to="/Team">Our Team</Link></li>
            <li>
                <Link className="link" to="">Donate</Link>
                <ul className="sub-menu">
                    <li><Link className="link" to="/WhyDonate">Why Donate?</Link></li>
                    <li><Link className="link" to="/HowYourDonationHelps">How Your Donation Helps</Link></li>
                    <li><Link className="link" to="/Donate">Donate Now</Link></li>
                </ul>

            </li>
            <li>
                <Link className="link" to="#">Downloads</Link>
                <ul className="sub-menu">
                    <li><Link className="link" to="/DonationForm">Donation Form</Link></li>
                    <li><Link className="link" to="/MembershipForm">Membership Form</Link></li>
                    <li><Link className="link" to="/SocietyRegistration">Society Registration</Link></li>
                    <li><Link className="link" to="/ProfessionalVolunteerForm">Professional Volunteer Form</Link></li>
                </ul>
            </li>
            <li>
                <Link className="link" to="#">Join Us</Link>
                <ul className="sub-menu">
                    <li><Link className="link" to="/BenefitsofJoining">Benefits of Joining</Link></li>
                    <li><Link className="link" to="/HowtoJoin">How to Join</Link></li>
                    <li><Link className="link" to="/VolunteerOpportunities">Volunteer Opportunities</Link></li>
                </ul>
            </li>
            <li>
                <Link className="link" to="#">Contact Us</Link>
                <ul className="sub-menu">
                    <li><Link className="link" to="#">Office Location</Link></li>
                    <li><Link className="link" to="/Contact">Contact Form</Link></li>
                    <li><Link className="link" to="#">Social Media Links</Link></li>
                    <li><Link className="link" to="#">Email Us</Link></li>
                </ul>
            </li>
            <li>
                <Link className="link" to="/FrequentlyAskedQues">FAQ</Link>
            </li>
        </ul>
    </nav>

    </>
  )
}


export default Header