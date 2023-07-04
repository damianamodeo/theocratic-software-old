import { publishersDB } from "./initPublishers";

const deletePublisher = (id: number) => {
  publishersDB.publishers.delete(id);
};

export default deletePublisher;
