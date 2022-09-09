/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDriverDocument = /* GraphQL */ `
  mutation CreateDriverDocument(
    $input: CreateDriverDocumentInput!
    $condition: ModelDriverDocumentConditionInput
  ) {
    createDriverDocument(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateDriverDocument = /* GraphQL */ `
  mutation UpdateDriverDocument(
    $input: UpdateDriverDocumentInput!
    $condition: ModelDriverDocumentConditionInput
  ) {
    updateDriverDocument(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteDriverDocument = /* GraphQL */ `
  mutation DeleteDriverDocument(
    $input: DeleteDriverDocumentInput!
    $condition: ModelDriverDocumentConditionInput
  ) {
    deleteDriverDocument(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
