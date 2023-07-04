import Header from '@COMPONENTS/containers/Header';
import { BackArrow } from '@ICONS/IconIndex';

type AddPublisherHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const AddPublisherHeader = ({ changeSubpage }: AddPublisherHeaderPageHeaderProps) => {

  //console.log('AddPublisherHeader', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Home', '>')}
        ><BackArrow /></div>
      }
      center={<div className={``}>Add Publisher</div>}
      right={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => {
            return;
          }}
        ></div>
      }
    />
  );
};

export default AddPublisherHeader;