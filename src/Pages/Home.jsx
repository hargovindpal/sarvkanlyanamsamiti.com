import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import slide1 from '../assets/slides/1.jpg';
import slide2 from '../assets/slides/2.jpg';
import slide3 from '../assets/slides/3.jpg';
import slide4 from '../assets/slides/4.jpeg';
import praveenGupta from '../assets/team/Dr._Praveen_Gupta.png';
import kailashNarayan from '../assets/team/Kailash_Narayan_Gupta.png';
import robinJoseph from '../assets/team/Dr._Robin_Joseph.png';
import sponser1 from '../assets/sponser/1.jpg';
import sponser2 from '../assets/sponser/2.jpg';
import sponser3 from '../assets/sponser/3.jpg';
import sponser4 from '../assets/sponser/4.jpg';
import sponser5 from '../assets/sponser/5.jpg';
import sponser6 from '../assets/sponser/6.jpg';
const Home = () => {
    alert('hello');
  return (

    <>

    <div id="maincarousel" className="mgn-minus carousel slide section1" data-bs-ride="carousel">
 
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#maincarousel" data-bs-slide-to="0" className="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#maincarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#maincarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#maincarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1500">
                <img data-aos="zoom-in-down" data-aos-duration="1000" src={slide1} alt="slide-1"/>
                <div className="carousel-caption">
                    <h1 data-aos="zoom-in-down" data-aos-duration="1000">SARV KALYANAM SAMITI</h1>
                    <h3>Is dedicated to the holistic development of individuals for a stronger nation.</h3>
                </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
                <img src={slide3} alt="slide-3"/>
                <div className="carousel-caption">
                    <h1 data-aos="zoom-in-down" data-aos-duration="6000">SARV KALYANAM SAMITI</h1>
                    <h3>Establishes educational institutions without discrimination to promote universal education.</h3>
                </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
                <img src={slide2} alt="slide-2"/>
                <div className="carousel-caption">
                    <h1 data-aos="zoom-in-down" data-aos-duration="1000">SARV KALYANAM SAMITI</h1>
                    <h3>Sets up advanced laboratories and hospitals for pioneering research and healthcare</h3>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src={slide4} alt="slide-4"/>
            </div>
            
        </div>


        <button className="carousel-control-prev lr-control" type="button" data-bs-target="#maincarousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#maincarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <div className="section1">
        <div className="section-container bg-color">
            <div className="card" data-aos="zoom-in-down" data-aos-duration="1000">
                <div className="top" data-aos="zoom-in-down" data-aos-duration="2000">
                    <FontAwesomeIcon icon="fa-solid fa-flag-checkered headicon"></FontAwesomeIcon>
                </div>
                <div className="info" data-aos="zoom-in" data-aos-duration="2000">
                    <p className="title">Our Mission</p>
                    <p>The mission of the Sarv Kalyanam Samiti is to foster holistic development in individuals and
                        communities through comprehensive educational, healthcare, and social welfare initiatives...
                    </p>
                </div>
                <div className="bottom"><button type="button" className="button3"
                        onClick="window.location.href='ourvision.html'">READ MORE</button></div>
            </div>

            <div className="card" data-aos="fade-up-right" data-aos-duration="1000">
                <div className="top" data-aos="zoom-in-down" data-aos-duration="2000">
                    <FontAwesomeIcon icon="fa-solid fa-users headicon"></FontAwesomeIcon>
                </div>
                <div className="info" data-aos="zoom-in" data-aos-duration="2000">
                    <p className="title">Volunteer</p>
                    <p>Join us in making a difference and contributing to the welfare and development of our society.
                        Assist in fundraising efforts to support our various projects and initiatives... </p>
                </div>
                <div className="bottom"> <button type="button" className="button3"
                        onClick="window.location.href='VolunteerOpportunities.html'">JOIN NOW </button></div>
            </div>

            <div className="card" data-aos="zoom-in-left" data-aos-duration="1000">
                <div className="top" data-aos="zoom-in-down" data-aos-duration="2000">
                    <FontAwesomeIcon icon="fa-solid fa-hands-holding-circle headicon"></FontAwesomeIcon>
                </div>
                <div className="info" data-aos="zoom-in" data-aos-duration="2000">
                    <p className="title">Start a Fundraiser</p>
                    <p>The mission of the Sarv Kalyanam Samiti is to foster holistic development in individuals and
                        communities through comprehensive educational, healthcare, and social welfare initiatives...
                    </p>
                </div>
                <div className="bottom">
                    <button type="button" className="button3" onClick="window.location.href='Fundraiser.html'">GET STARTED
                    </button>
                </div>
            </div>

            <div className="card" data-aos="zoom-in-left" data-aos-duration="1000">
                <div className="top" data-aos="zoom-in-down" data-aos-duration="2000">
                    <FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up headicon"></FontAwesomeIcon>
                </div>
                <div className="info" data-aos="zoom-in" data-aos-duration="2000">
                    <p className="title">Donate Today</p>
                    <p>Contributing to Sarv Kalyanam Samiti allows you to play an essential role in the betterment of society. Your donations help us drive numerous initiatives aimed at social, educational, and cultural development. Together,...
                    </p>
                </div>
                <div className="bottom"><button type="button" className="button3"
                        onClick="window.location.href='donate.html'">DONATE NOW</button></div>
            </div>

        </div>
    </div>

    <div id="teamcarousel" className="carousel slide section1" data-bs-ride="carousel" data-aos="zoom-in-left"
        data-aos-duration="2000">
        <div className="carousel-inner">
            <div className="carousel-item  active" data-bs-interval="2000">
                <div className="section1  pd-top">
                    <h2 className="heading">PRESIDENT'S MESSAGE</h2>
                    <div className="section-container bg-color">
                        <div className="slider-content">
                            <div className="txtcontent">
                                <p><b>"Education is the most powerful weapon which you can use to change the world."
                                    </b></p>
                                <p>At Sarv Kalyanam Samiti, we believe in the transformative power of education and its
                                    ability to
                                    uplift societies. Our
                                    mission is rooted in the holistic development of individuals, empowering them to
                                    become
                                    responsible and capable
                                    citizens. By focusing on social, moral, physical, cultural, and mental growth, we
                                    aim to create
                                    a society that is
                                    well-equipped to face the challenges of the future.

                                </p>
                                <p>Our educational initiatives are designed to break down barriers and provide equal
                                    opportunities
                                    for all. We are
                                    committed to establishing institutions that offer quality education irrespective of
                                    caste,
                                    religion, or language.....
                                </p>
                                <button className="button3" type="submit">Know More</button>
                            </div>
                            <div className="imgcontent">
                                <img className="team-img" src={praveenGupta}/>
                                <div className="team-title">
                                    <p className="name">Dr. Praveen Gupta</p>
                                    <p className="designation">( President )</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
                <div className="section1 pd-top">
                    <h2 className="heading">PATRON'S MESSAGE</h2>
                    <div className="section-container bg-color">
                        <div className="slider-content">
                            <div className="txtcontent">
                                <p><b>"Unity is strength. When there is teamwork and collaboration, wonderful things can
                                        be
                                        achieved."</b></p>
                                <p>Welcome to the Sarv Kalyanam Samiti. Our organization stands as a beacon of hope,
                                    aiming to
                                    foster a society where every
                                    individual can thrive and contribute to the nation's progress. Our core belief lies
                                    in the
                                    holistic development of
                                    individuals, focusing on their social, moral, physical, cultural, and mental growth.
                                    We envision
                                    creating a community of
                                    responsible and capable citizens who are equipped to face the challenges of the
                                    modern world.
                                </p>
                                <p>Education is the cornerstone of our mission. By establishing educational institutions
                                    that
                                    transcend barriers of caste,
                                    religion, and language, we strive to provide quality education to all. Our
                                    commitment extends.....
                                </p>
                                <button className="button3" type="submit">Know More</button>
                            </div>
                            <div className="imgcontent">
                                <img className="team-img" src={kailashNarayan}/>
                                <div className="team-title">
                                    <p className="name">Er. Kailash Narayan Gupta</p>
                                    <p className="designation">( Patron )</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <div className="section1 pd-top">
                    <h2 className="heading">MANAGER'S MESSAGE</h2>
                    <div className="section-container bg-color">
                        <div className="slider-content">
                            <div className="txtcontent">
                                <p><b>"The best way to find yourself is to lose yourself in the service of others."</b>
                                </p>
                                <p>At Sarv Kalyanam Samiti, our commitment to societal development and individual
                                    empowerment is
                                    unwavering. Our
                                    organization is dedicated to fostering a community where every person can grow,
                                    learn, and
                                    contribute to the greater
                                    good. Our holistic approach focuses on social, moral, physical, cultural, and mental
                                    development, aiming to nurture
                                    well-rounded individuals who can drive positive change in society.
                                </p>
                                <p>Education is at the heart of our mission. We believe in providing quality education
                                    that
                                    transcends barriers of caste,
                                    religion, and language. By establishing educational institutions that cater to
                                    diverse needs,......
                                </p>
                                <button className="button3" type="submit">Know More</button>
                            </div>
                            <div className="imgcontent">
                                <img className="team-img" src={robinJoseph}/>
                                <div className="team-title">
                                    <p className="name">Dr. Robin Joseph</p>
                                    <p className="designation">( Secretary/Manager )</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#teamcarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon team-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#teamcarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon team-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <div className="section1 mgn-minus  pd-top">
        <div className="section-container">
            <div className="content border box-shadow">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115293.28983806369!2d78.4798856343178!3d25.44109486322017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481ca!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717408311303!5m2!1sen!2sin"
                    width="650px;"  height="450"
                    style={{border:'1px solid rgb(212, 208, 208);'}} loading="lazy"
                    ></iframe>
            </div>
            <div className="content border box-shadow">
                <form className="contact-form border" data-aos="zoom-in-left" data-aos-duration="2000" id="form">
                    <h2 className="heading">GET IN TOUCH WITH US-FORM</h2>
                    <div className="form-container">
                        <div className="row">
                            <div className="item">
                                <input type="text" id="name" placeholder="Enter Your Name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <input type="email" id="email"placeholder="Enter Your Email ID"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <input type="number" id="contact" placeholder="Enter Your Mobile Number"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <textarea type="text" id="message"
                                    placeholder="Write a Message"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <button id="button2" type="submit">GET CONNECT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    </div>

    <div className="section1 pd-top">
        <h1 className="heading">OUR SPONSERS</h1>
        <div className="section-container">

            <div className="sponsers">
                <figure data-aos="zoom-in-right" data-aos-duration="2000"><img src={sponser1}/></figure>
                <figure data-aos="zoom-in" data-aos-duration="2000"><img src={sponser2}/></figure>
                <figure data-aos="zoom-in-right" data-aos-duration="2000"><img src={sponser3}/></figure>
                <figure data-aos="zoom-in" data-aos-duration="2000"><img src={sponser4}/></figure>
                <figure data-aos="zoom-in-left" data-aos-duration="2000"><img src={sponser5}/></figure>
                <figure data-aos="zoom-in-left" data-aos-duration="2000"><img src={sponser6}/></figure>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home;