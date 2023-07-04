import { publishersDB } from "@SERVICES/dexie/publishers/initPublishers";
import { publishersList } from "@SERVICES/dexie/publishers/publishersList";
import { useLiveQuery } from "dexie-react-hooks";

type PublishersListPageProps = {
  changeSubpage: (newSubpage: string, direction: "<" | ">", state?: any) => void;
};

const PublishersList = ({ changeSubpage }: PublishersListPageProps) => {
  const publishersList: [] = useLiveQuery(async () => {
    return await publishersDB.publishers.toArray();
  });

  // console.log('PublishersList', `${'variable'}`)
  return (
    <div className={`h-full dark:text-white flex-col center-v`}>
      {publishersList?.map((publisher: any, index: number) => {
        //console.log('PublishersList', `${'publisher'}`)
        return (
          <div
            key={publisher.id}
            onClick={() =>
              changeSubpage("Update Publisher", "<")
            }
          >
            {publisher.firstName}
          </div>
        );
      })}
    </div>
  );
};

export default PublishersList;
