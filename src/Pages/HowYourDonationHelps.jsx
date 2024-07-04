import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HowYourDonationHelps = () => {
  return (
    <>
    <div className="section1 mgn-minus  pd-top">
        <h2 className="heading">HOW YOUR DONATION HELPS</h2>
        <div className="section-container">
            <div className="fullcontent mgn-minus">
                <div className="txtcontent" data-aos="zoom-in-left" data-aos-duration="2000">
                    <ol className="list-group list-group-bullet">
                        <li className="border list-group-item"><FontAwesomeIcon icon="fa-solid fa-caret-right" ></FontAwesomeIcon>
                            <b>Educational Support:</b>Your donations help establish and maintain educational institutions that provide quality education without discrimination.
                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Health Services: </b>Funds are used to set up hospitals, laboratories, and other healthcare facilities to ensure accessible medical care.
                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Cultural Development:</b>Contributions support programs that promote moral, social, and cultural values.

                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Research and Innovation: </b>Donations enable us to equip laboratories with the latest scientific tools and conduct significant research.
                        </li>
                        <li className="list-group-item border"><FontAwesomeIcon icon="fa-solid fa-caret-right " ></FontAwesomeIcon> <b>Community Development: </b>Your support aids various community projects aimed at the overall development of society.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HowYourDonationHelps