import { InfoSection } from '../../components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
