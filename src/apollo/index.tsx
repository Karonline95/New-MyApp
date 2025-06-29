import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          comments: {
            keyArgs: false,
            merge(existing = {data: []}, incoming, {args}) {
              const {page} = args?.options?.paginate || {};
              if (page === 1) {
                return {
                  ...incoming,
                  data: [...incoming.data],
                };
              } else {
                return {
                  ...incoming,
                  data: [...existing.data, ...incoming.data],
                };
              }
            },
          },
        },
      },
    },
  }),
});
