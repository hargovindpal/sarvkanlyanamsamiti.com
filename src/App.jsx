import React, { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Introduction from './Pages/Introduction'
import MissionVision from './Pages/MissionVision'
import PresidentMessage from './Pages/PresidentMessage'
import PatronMessage from './Pages/PatronMessage'
import ManagerMessage from './Pages/ManagerMessage'
import Objectives from './Pages/Objectives'
import Team from './Pages/Team'
import Contact from './Pages/Contact'
import UpcomingEvents from './Pages/UpcomingEvents'
import NewsPaperClips from './Pages/NewsPaperClips'
import WhyDonate from './Pages/WhyDonate'
import HowYourDonationHelps from './Pages/HowYourDonationHelps'
import Donate from './Pages/Donate'
import DonationForm from './Pages/DonationForm'
import MembershipForm from './Pages/MembershipForm'
import SocietyRegistration from './Pages/SocietyRegistration'
import ProfessionalVolunteerForm from './Pages/ProfessionalVolunteerForm'
import BenefitsofJoining from './Pages/BenefitsofJoining'
import HowtoJoin from './Pages/HowtoJoin'
import VolunteerOpportunities from './Pages/VolunteerOpportunities'
import FrequentlyAskedQues from './Pages/FrequentlyAskedQues'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab, faFontAwesome)

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
    });
  }, []);

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Introduction' element={<Introduction />} />
      <Route path='/MissionVision' element={<MissionVision/>} />
      <Route path='/PresidentMessage' element={<PresidentMessage/>} />
      <Route path='/PatronMessage' element={<PatronMessage/>} />
      <Route path='/ManagerMessage' element={<ManagerMessage/>} />
      <Route path='/Objectives' element={<Objectives/>} />
      <Route path='/Team' element={<Team/>} />
      <Route path='/UpcomingEvents' element={<UpcomingEvents/>} />
      <Route path='/NewsPaperClips' element={<NewsPaperClips/>} />
      <Route path='/WhyDonate' element={<WhyDonate/>} />
      <Route path='/HowYourDonationHelps' element={<HowYourDonationHelps/>} />
      <Route path='/Donate' element={<Donate/>} />
      <Route path='/DonationForm' element={<DonationForm/>} />
      <Route path='/MembershipForm' element={<MembershipForm/>} />
      <Route path='/SocietyRegistration' element={<SocietyRegistration/>} />
      <Route path='/ProfessionalVolunteerForm' element={<ProfessionalVolunteerForm/>} />
      <Route path='/BenefitsofJoining' element={<BenefitsofJoining/>} />
      <Route path='/HowtoJoin' element={<HowtoJoin/>} />
      <Route path='/VolunteerOpportunities' element={<VolunteerOpportunities/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/FrequentlyAskedQues' element={<FrequentlyAskedQues/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
