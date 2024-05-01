import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CurrentEvents from './pages/CurrentEvents';
import TechTrends from './pages/TechTrends';
import VoiceOfAlumni from './pages/VoiceOfAlumni';
import AlumniConnect from './pages/AlumniConnect';
import ShareOpportunity from './pages/ShareOpportunity';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/current-events' element={<CurrentEvents />} />
        <Route path='/tech-trends' element={<TechTrends />} />
        <Route path='/voice-of-alumni' element={<VoiceOfAlumni />} />
        <Route path='/alumni-connect' element={<AlumniConnect />} />
        <Route path='/share-opportunity' element={<ShareOpportunity />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}