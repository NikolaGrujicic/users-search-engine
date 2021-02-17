import { useCallback, useEffect } from 'react';
import { incrementUsersPage } from '../../redux/actions/userActions';

const useInfiniteScroll = (scrollRef, dispatch) => {
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
};

export default useInfiniteScroll;
