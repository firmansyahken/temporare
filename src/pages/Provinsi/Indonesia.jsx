import Hero from "../../components/Hero/Hero";
import Province from "../../components/Province/Province";
import FormCovid from "../../components/FormCovid/FormCovid"

function Provinsi() {
  return (
    <>
      <div className="wrapper">
          <Hero/>
          <Province/>
          <FormCovid/>
      </div>
    </>
  );
}

export default Provinsi;
