import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="section1 mgn-minus  pd-top">
        <div className="section-container">
            <div className="content border box-shadow">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115293.28983806369!2d78.4798856343178!3d25.44109486322017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481ca!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717408311303!5m2!1sen!2sin"
                   width="650px;" height="450"
                    style={{border:'1px solid rgb(212, 208, 208);'}} loading="lazy"></iframe>
            </div>
            <div className="content box-shadow">
                <form className="contact-form border" data-aos="zoom-in-left" data-aos-duration="2000">
                    <h2 className="heading">GET IN TOUCH WITH US-FORM</h2>
                    <div className="form-container">
                        <div className="row">
                            <div className="item">
                                <input type="text" id="name" name="name" placeholder="Enter Your Name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <input type="email" id="email" name="email" placeholder="Enter Your Email ID"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <input type="number" id="contact" name="contact" placeholder="Enter Your Mobile Number"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <textarea type="text" id="message" name="message"
                                    placeholder="Write a Message"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item">
                                <button id="button2" type="submit" name="submit">GET CONNECT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    </div>
    </>
  )
}

export default Contact