import Header from '@COMPONENTS/containers/Header';
import { BackArrow } from '@ICONS/IconIndex';

type UpdatePublisherHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const UpdatePublisherHeader = ({ changeSubpage }: UpdatePublisherHeaderPageHeaderProps) => {

  //console.log('UpdatePublisherHeader', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage('Publishers List', '>')}
        ><BackArrow /></div>
      }
      center={<div className={``}>Update Publisher</div>}
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

export default UpdatePublisherHeader;