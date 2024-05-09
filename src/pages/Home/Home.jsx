import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Indonesia from "../../components/Indonesia/Indonesia";
import Province from "../../components/Province/Province";
import FormCovid from "../../components/FormCovid/FormCovid";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar/>
      <div className="wrapper">
          <Hero/>
      </div>
      <Indonesia/>
      <div className="wrapper">
        <Province/>
      </div>
      <FormCovid/>
      <Footer/>
    </>
  );
}

export default HomePage;
