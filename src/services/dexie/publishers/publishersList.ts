import { useLiveQuery } from "dexie-react-hooks";
import { publishersDB } from "./initPublishers";

export const publishersList = useLiveQuery(async () => {
  return await publishersDB.publishers.toArray();
});
