import PublisherDetailsForm from "@COMPONENTS/dexie/publishers/PublisherDetailsForm";

type UpdatePublisherPageProps = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
  state?: any;
};

const UpdatePublisher = ({
  changeSubpage,
  state,
}: UpdatePublisherPageProps) => {
  console.log("UpdatePublisher", `${state}`);
  return (
    <div className={`h-full dark:text-white flex-col center-v`}>
      <PublisherDetailsForm publisherID={state}></PublisherDetailsForm>
    </div>
  );
};

export default UpdatePublisher;
