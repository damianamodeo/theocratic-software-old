import Header from '@COMPONENTS/containers/Header';
import { ReactComponent as BackArrow } from "@ICONS/backArrow.svg";

type TestHeaderProps = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const TestHeader = ({ changeSubpage }: TestHeaderProps) => {

  // console.log('TestHeader', `${'variable'}`)
  return (
    <Header
      left={
        
        <div
          className="flex stroke-blue-700 fill-none dark:stroke-blue-400 text-blue-700 dark:text-blue-400 stroke-[2] "
          onClick={() => changeSubpage("Home", ">")}
        >
          <div className="text-[2rem] m-auto">
            <BackArrow />
          </div>
          <div className="my-auto">Back</div>
        </div>
      }
      center={<div className={``}>TestHeader</div>}
      right={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => {
            return;
          }}
        >Right</div>
      }
    />
  );
};

export default TestHeader;