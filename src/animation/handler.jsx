import { scroller } from 'react-scroll';

const handleScroll = () => {
  scroller.scrollTo('targetSection', {
    duration: 1000,
    delay: 10,
    smooth: 'easeOutCubic',
    offset: -125, // optional, adjusts scroll position
  });
};

export default handleScroll;