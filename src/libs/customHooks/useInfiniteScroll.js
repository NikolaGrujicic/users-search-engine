import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { incrementUsersPage, stackRandomUsersAction } from '../../redux/actions/userActions';

function useInfiniteScroll(scrollRef, dispatch) {
  const page = useSelector(state => state.randomUsers.page);
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            dispatch(incrementUsersPage());
          }
        });
      }).observe(node);
    },
    [dispatch],
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);

  useEffect(() => {
    if (page > 0) {
      dispatch(
        stackRandomUsersAction(page),
      );
    }
  }, [page]);
}

export const doScroll = (scrollRef, dispatch, fetch) => {
  if (fetch) {
    return useInfiniteScroll(scrollRef, dispatch);
  }
  return null;
};

export default useInfiniteScroll;
