import Hero from "../../components/Hero/Hero";
import ProvinceRegion from "../../components/Region/ProvinceRegion";
import Situation from "../../components/Situation/Situation";

function Indonesia() {
  return (
    <>
      <div className="wrapper">
          <Hero/>
      </div>
      <Situation category="Indonesia"/>
      <ProvinceRegion/>
    </>
  );
}

export default Indonesia;
