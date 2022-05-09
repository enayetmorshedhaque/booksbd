import logo from './logo.svg';
import './App.css';
import ContactUs from './Components/FrontEnd/ContactUs/ContactUs';
import Footer from './Components/Shared/Footer/Footer';
import WhyChooseUs from './Components/Shared/WhyChooseUs/WhyChooseUs';
import Subscribe from './Components/Shared/Subscribe/Subscribe';
import Authors from './Components/FrontEnd/Authors/Authors';
import Publications from './Components/FrontEnd/Publications/Publications';

function App() {
  return (
    [
      <Authors></Authors>,
      <Publications></Publications>,
      <ContactUs></ContactUs>,
      <Subscribe></Subscribe>,
      <WhyChooseUs></WhyChooseUs>,
      <Footer></Footer>
    ]
  );
}

export default App;
