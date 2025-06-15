import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      currency
      emoji
      name
      phone
    }
  }
`;
