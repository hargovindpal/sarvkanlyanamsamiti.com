import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DonationForm = () => {
  return (
    <>
    <div className="section1 mgn-minus pd-top" data-aos="zoom-in-down" data-aos-duration="2000">
        <h2 className="heading">DONATION FORM</h2>
        <div className="section-container">
            <div className="content border bg-color mgn-minus">
                <form className="pd-top">
                        <div className="form-section  mb-3">
                            <div className="bg-tranparent">
                                <label  htmlFor="yourName" className="form-label">Your Name</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Your Name"/>
                            </div>
                            <div className="bg-tranparent">
                                <label  htmlFor="yourName" className="form-label">Your Email</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Your Email "/>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                                <label  htmlFor="yourName" className="form-label">Contact</label>
                                <input type="number" id="yourName" className="form-control" placeholder="Enter Your Mobile number"/>
                            </div>
                            <div>
                                <label  htmlFor="yourName" className="form-label">Donation Amount</label>
                                <input type="number" id="yourName" className="form-control" placeholder="Enter Donation Amount"/>
                            </div>
                        </div>
                        <div className="width-100 mb-3">
                            <label  htmlFor="select" className="form-label">Donation Category</label>
                            <select id="select" className="box-shadow form-select ">
                              <option selected>Select Donation</option>
                              <option>Health Services</option>
                              <option>Cultural Programs</option>
                              <option>Research and Innovation</option>
                              <option>Community Development</option>
                            </select>
                            <label  htmlFor="disabledSelect" className="form-label">Payment Method</label>
                            <select id="disabledSelect" className="box-shadow form-select">
                              <option selected>Select Payment Method</option>
                              <option >Debit Card/Credit Card</option>
                              <option >Bank Transfer</option>
                              <option >PayPal</option>
                              <option >UPI</option>
                            </select>
                        </div>
                        <div className="width-100 mb-3">
                            <div>
                                <label  htmlFor="Message" className="form-label">Message</label>
                                <textarea type="textarea" id="Message" className="form-control" placeholder="Enter Your Name Here.."></textarea>                            
                            </div>
                      </div>
                      <div className="width-100 mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck"/>
                          <label className="form-check-label"  htmlFor="disabledFieldsetCheck">
                            Can't check this
                          </label>
                        </div>
                      </div>
                      <div className="width-100 mb-3">
                        <button  type="submit" className="pd-full button3 width-100 ">Submit</button>
                    </div>
                </form>
                <div className="txtcontent" data-aos="zoom-in-down" data-aos-duration="2000">
                    <p className="title">Important Instructions:</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-play"></FontAwesomeIcon> After making a donation, please send the transaction details to our official email and WhatsApp number for verification and acknowledgment.
                    </p>
                    <p><FontAwesomeIcon icon="fa-solid fa-play"></FontAwesomeIcon> For any queries or assistance, feel free to contact us through the given communication channels.
                    </p>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default DonationForm