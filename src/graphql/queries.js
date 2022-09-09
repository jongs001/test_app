/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDriverDocument = /* GraphQL */ `
  query GetDriverDocument($id: ID!) {
    getDriverDocument(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listDriverDocuments = /* GraphQL */ `
  query ListDriverDocuments(
    $filter: ModelDriverDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
