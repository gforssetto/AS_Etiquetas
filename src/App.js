import './scss/style.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ButtonMain from './components/Button';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <ButtonMain />
        <About/>
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
