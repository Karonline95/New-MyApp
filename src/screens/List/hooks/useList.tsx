import {useQuery} from '@apollo/client';
import {GET_COMMENTS} from '../../../graphql/comments';

export const QUANTITY_DEFAULT = 20;

const useList = () => {
  const {data, loading, error, refetch, fetchMore} = useQuery(GET_COMMENTS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      page: 1,
      limit: QUANTITY_DEFAULT,
    },
  });
  const comments = data?.comments?.data || [];

  const loadMore = () => {
    const currentCount = comments.length || 0;
    const nextPage = Math.floor(currentCount / QUANTITY_DEFAULT) + 1;
    const totalCount = data?.comments?.meta?.totalCount || 0;
    const hasMore = currentCount < totalCount;
    if (hasMore) {
      fetchMore({
        variables: {
          page: nextPage,
          limit: QUANTITY_DEFAULT,
        },
      });
    }
  };

  return {
    comments,
    loading,
    error,
    refetch,
    loadMore,
  };
};
export default useList;
