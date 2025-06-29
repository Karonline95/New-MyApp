import {gql} from '@apollo/client';

export const GET_COMMENTS = gql`
  query GetComments($page: Int!, $limit: Int!) {
    comments(options: {paginate: {page: $page, limit: $limit}}) {
      data {
        id
        name
        email
        body
        post {
          id
          title
          body
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($name: String!, $email: String!, $body: String!) {
    createComment(input: {name: $name, email: $email, body: $body}) {
      id
      name
      email
      body
      post {
        id
        title
        body
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`;
