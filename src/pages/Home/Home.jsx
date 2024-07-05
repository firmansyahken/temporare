import Hero from "../../components/Hero/Hero";
import GlobalRegion from "../../components/Region/GlobalRegion";
import Situation from "../../components/Situation/Situation";

function HomePage() {
  return (
    <>
      <Hero/>
      <Situation category="Global"/>
      <GlobalRegion/>
    </>
  );
}

export default HomePage;
