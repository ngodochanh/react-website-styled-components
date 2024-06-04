import { InfoSection } from '../../components/InfoSection';
import { Pricing } from '../../components/Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
