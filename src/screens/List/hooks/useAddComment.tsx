import {useMutation} from '@apollo/client';
import {
  GET_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from '../../../graphql/comments';
import {useState} from 'react';
import {QUANTITY_DEFAULT} from './useList';

type CommentsData = {
  comments: {
    data: any[];
    meta: {
      totalCount: number;
    };
  };
};

const useAddComment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [deleteBtnEnabled, setDeleteBtnEnabled] = useState(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  const [addComment] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {
      setDeleteBtnEnabled(true);
    },
    onError: error => {
      console.log('onError', error);
    },
  });

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    onCompleted: () => {
      setDeleteBtnEnabled(false);
    },
    onError: error => {
      console.log('onError', error);
    },
  });

  const handleNameChange = (value: string) => {
    setName(value);
  };
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleBodyChange = (value: string) => {
    setBody(value);
  };

  const handleAddComment = async () => {
    try {
      await addComment({
        variables: {
          name,
          email,
          body,
        },
        update(cache, {data}) {
          const existing = cache.readQuery<CommentsData>({
            query: GET_COMMENTS,
            variables: {
              page: 1,
              limit: QUANTITY_DEFAULT,
            },
          });
          if (!existing) {
            return;
          }
          const addCommentData = data.createComment || {};

          const updatedData = [
            addCommentData,
            ...existing.comments.data.filter(
              item => item.id !== addCommentData.id,
            ),
          ];
          cache.writeQuery<CommentsData>({
            query: GET_COMMENTS,
            variables: {page: 1, limit: QUANTITY_DEFAULT},
            data: {
              comments: {
                ...existing.comments,
                data: updatedData,
                meta: {
                  ...existing.comments.meta,
                  totalCount: existing.comments.meta.totalCount + 1,
                },
              },
            },
          });
        },
      });
    } catch (e) {
      console.error('GraphQL mutation error:', e);
    }
  };

  const handleDeleteComment = async () => {
    try {
      await deleteComment({
        variables: {
          id: 501,
        },
        update: (cache, {data}) => {
          if (!data?.deleteComment) {
            return;
          }

          cache.modify({
            fields: {
              comments(existingComments = {}, {readField}) {
                const newData = existingComments.data?.filter((item: any) => {
                  const itemId = readField('id', item);
                  return itemId !== String(501);
                });

                return {
                  ...existingComments,
                  data: newData,
                };
              },
            },
          });
        },
      });
    } catch (e) {
      console.error('GraphQL mutation error:', e);
    }
  };

  const btnDisabled = !name || !(isEmailValid && email) || !body;

  return {
    name,
    email,
    body,
    isEmailValid,
    btnDisabled,
    deleteBtnEnabled,
    handleNameChange,
    handleEmailChange,
    handleBodyChange,
    handleAddComment,
    handleDeleteComment,
  };
};
export default useAddComment;
