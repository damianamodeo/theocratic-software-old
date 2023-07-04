import { publishersDB } from "./initPublishers";

export const addNewPublisher = (publisher: any) => {
  const userID = crypto.randomUUID();
  publishersDB.publishers.add({
    userID: userID,
    firstName: publisher.firstName,
    middleName: publisher.middleName,
    lastName: publisher.lastName,
    otherName: publisher.displayName,
    mobilePhone: publisher.mobilePhone,
    publisherType: publisher.publisherType,
    familyHead: userID,
  });
};
