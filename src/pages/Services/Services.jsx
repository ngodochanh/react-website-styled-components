import { InfoSection } from '../../components/InfoSection';
import { Pricing } from '../../components/Pricing';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
