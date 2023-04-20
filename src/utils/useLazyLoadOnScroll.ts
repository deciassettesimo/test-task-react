import { useEffect, useState } from 'react';

const useLazyLoadOnScroll = (loaded: boolean) => {
  const [data, setData] = useState({
    documentHeight: undefined,
    windowHeight: undefined,
    scrollTop: undefined,
  });

  useEffect(() => {
    if (!loaded) return;

    function handleChange() {
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      const windowHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      setData({ documentHeight, windowHeight, scrollTop });
    }

    handleChange();

    window.addEventListener('resize', handleChange);
    document.addEventListener('scroll', handleChange);

    return () => {
      window.removeEventListener('resize', handleChange);
      document.removeEventListener('scroll', handleChange);
    };
  }, [loaded]);

  return data.windowHeight + data.scrollTop >= data.documentHeight - 200;
};

export default useLazyLoadOnScroll;
