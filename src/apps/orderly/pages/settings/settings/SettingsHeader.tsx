import Header from '@COMPONENTS/containers/Header';

type ComponentType = {
  changeSubpage: (newSubpage: string, direction: '<' | '>') => void;
};

const Component = ({ changeSubpage }: ComponentType) => {

  return (
    <Header
      left={
        <div
          className={`text-[2rem] m-auto`}
          onClick={() => {
            return;
          }}
        ></div>
      }
      center={<div className={``}>Settings</div>}
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

export default Component;