import Navbar from '../components/navbar/Navbar';
import Navigation from '../components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurApplications from '../components/ourApplications/OurApplications';
import Chance from '../components/chance/Chance';
import ImagesJsx from '../components/imagesJsx/ImagesJsx';
import Custom from '../components/CustomerOpinion/Custom';
import RightNow from '../components/RightNow/RightNow';
import Footer from '../components/Footer/footer';
import '../style/responsiv/responsivStyle.css'

const Home = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Navigation />
        <OurApplications />
        <Chance />
        <ImagesJsx />
        <Custom />
        <RightNow />
        <Footer />
        <Routes>
          <Route path="/Maxsulot" />
          <Route path="/Imkoniyatlar"  />
          <Route path="/Fikrlar" />
          <Route path="/uzbek" />
          <Route path="/button" />
          <Route path="/Россия" />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
