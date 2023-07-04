import Header from "@COMPONENTS/containers/Header";
import { BackArrow } from "@ICONS/IconIndex";

type PublishersListHeaderPageHeaderProps = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const PublishersListHeader = ({
  changeSubpage,
}: PublishersListHeaderPageHeaderProps) => {
  //console.log('PublishersListHeader', `${'variable'}`)
  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => changeSubpage("Home", ">")}
        >
          <BackArrow />
        </div>
      }
      center={<div className={``}>Publishers List</div>}
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

export default PublishersListHeader;
