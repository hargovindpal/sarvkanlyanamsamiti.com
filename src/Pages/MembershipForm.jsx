import React from 'react'

const MembershipForm = () => {
  return (
    <>
    <div className="section1 mgn-minus  pd-top" data-aos="zoom-in-down" data-aos-duration="2000">
        <h2 className="heading">MEMBERSHIP FORM</h2>
        <div className="section-container">
            <div className="content border bg-color mgn-minus">
                <form className="pd-top">
                        <div className="form-section  mb-3">
                            <div className="bg-tranparent">
                                <label htmlFor="yourName" className="form-label">Your Name</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Your Name"/>
                            </div>
                            <div className="bg-tranparent">
                                <label htmlFor="yourName" className="form-label">Father’s/Husband’s Name</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Father/Husband Name"/>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Date of Birth</label>
                                <input type="date" id="yourName" className="form-control"/>
                            </div>
                            <div>
                                <label htmlFor="yourName" className="form-label">Phone Number</label>
                                <input type="number" id="yourName" className="form-control" placeholder="Enter Your Phone Number"/>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                            <label htmlFor="select" className="form-label">Gender</label>
                            <select id="select" className="box-shadow form-select ">
                                <option selected>Select Gender</option>
                                <option>Male</option>
                                <option>Femal</option>
                                <option>Other</option>
                            </select>
                            </div>

                            <div>
                            <label htmlFor="disabledSelect" className="form-label">Nationality:</label>
                            <select id="disabledSelect" className="box-shadow form-select">
                                <option selected>Select Nationality</option>
                                <option >Indian</option>
                                <option >NRI</option>
                                <option >Other</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Permanent Address</label>
                                <textarea type="number" id="yourName" className="form-control" placeholder="Enter Your Permanent Address"></textarea>
                            </div>
                            <div>
                                <label htmlFor="yourName" className="form-label">Current Address (if different)</label>
                                    <textarea type="number" id="yourName" className="form-control" placeholder="Enter Your Current Address"></textarea>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Email Address</label>
                                <input type="email" id="yourName" className="form-control" placeholder="Enter Your Email ID"/>
                            </div>
                            <div>
                                <label htmlFor="panNumber" className="form-label">PAN No</label>
                                <input type="TEXT" id="panNumber" className="form-control" placeholder="Enter PAN Card ID"/>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Aadhar Number</label>
                                <input type="number" id="yourName" className="form-control" placeholder="Enter Your 12-digit Aadhar Number"/>
                            </div>
                            <div>
                                <label htmlFor="yourName" className="form-label">Passport No</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Your Passport No (if any)"/>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">GSTN No</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Your GSTN No"/>
                            </div>
                            <div>
                                <label htmlFor="yourName" className="form-label">Whatsapp Number</label>
                                <input type="number" id="yourName" className="form-control" placeholder="Enter Your Whatsapp Number"/>
                            </div>
                        </div>
                        <p className="title">____Professional Information_____</p>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Qualification</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Your Qualifications"/>
                            </div>
                            <div>
                                <label htmlFor="yourName" className="form-label">Achievement</label>
                                <input type="number" id="yourName" className="form-control" placeholder="Write Your Achievement (if Any)"/>
                            </div>
                        </div>
                        <p className="title">____Occupation_____</p>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Organization/Company Name</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Write Your Organization/Company Name"/>
                            </div>
                            <div>
                                <label htmlFor="yourName" className="form-label">Designation</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Write Your Designation"/>
                            </div>
                        </div>
                        <div className="form-section mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Work Address</label>
                                <input type="text" id="yourName" className="form-control" placeholder="Enter Your Work Address"/>
                            </div>
                            <div>
                                <label htmlFor="yourName" className="form-label">Phone Number (Work)</label>
                                <input type="number" id="yourName" className="form-control" placeholder="Enter Your Phone Number (Work)"/>
                            </div>
                        </div>
                        <p className="title">____Membership Details____</p>
                        <div className="width-100 mb-3">
                            <div>
                                <label htmlFor="yourName" className="form-label">Type of Membership</label>
                                <select id="disabledSelect" className="box-shadow form-select">
                                    <option selected>Select Membership</option>
                                    <option >Regular Member</option>
                                    <option >Life Member</option>
                                    <option >Honorary Member</option>
                                </select>
                            </div>
                        </div>
                        <div className="width-100 mb-3">
                            <div>
                                <label htmlFor="Message" className="form-label">Message (if Any)</label>
                                <textarea type="textarea" id="Message" className="form-control" placeholder="Write Your Message.."></textarea>                            
                            </div>
                      </div>
                      <div className="width-100 mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                          <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                            <p>I hereby declare that the information provided is true to the best of my knowledge. I agree to abide by the rules and regulations of Sarv Kalyanam Samiti.</p>
                          </label>
                        </div>
                      </div>
                      <div className="flex-row width-100 mb-3">
                        <button  type="reset" id="button1" className="pd-full width-100 button3 ">RESET</button>
                        <button  type="submit"id="button1" className="pd-full width-100 ">SUBMIT</button>
                    </div>
                      
                </form>
                
            </div>
        </div>

            
    </div>
    </>
  )
}

export default MembershipForm