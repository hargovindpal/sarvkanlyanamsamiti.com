import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HowtoJoin = () => {
  return (
    <>
    <div className="section1 mgn-minus  pd-top">
        <h2 className="heading">HOW TO JOIN</h2>
        <div className="section-container">
            <div className="fullcontent mgn-minus">
                <div className="txtcontent" data-aos="zoom-in-left" data-aos-duration="2000">
                    <p className="title">Joining Sarv Kalyanam Samiti is simple:</p>
                    <ol className="list-group list-group-bullet">
                        <li className="border list-group-item"><FontAwesomeIcon icon="fa-solid fa-caret-right" ></FontAwesomeIcon>
                            <b>Visit our Office:  </b>You can visit us at Estuti Villa, S-26, K.K. Puri Colony, Nandanpura, Jhansi.
                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Online Registration:  </b>Fill out the membership form available on our website.
                            <a href="MembershipForm.html">Click Here</a>
                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Submit Required Documents: </b>Provide necessary documents such as ID proof and a passport-sized photograph.

                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Pay Membership Fee: </b>Pay the applicable membership fee as per your chosen category.
                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Confirmation:</b>Receive confirmation of your membership via email or post.
                        </li>
                    </ol>
                    <p className="title pd-top">For any queries, feel free to contact us.
                        <a href="tel:+9889003089"><FontAwesomeIcon icon="fa-solid fa-phone-volume"></FontAwesomeIcon>+91 9889003089</a>
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HowtoJoin