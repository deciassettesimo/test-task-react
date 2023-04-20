import React from 'react';

import { SliderTracksProps } from '../types';
import SliderContext from '../context';

import SliderTracksItem from './SliderTracksItem';

const SliderTracks: React.FC<SliderTracksProps> = (props) => {
  const { values, onStartMove } = props;
  const { range, min } = React.useContext(SliderContext);

  const trackList = React.useMemo(() => {
    if (!range) {
      // null value do not have track
      if (values.length === 0) {
        return [];
      }

      const endValue = values[0];

      return [
        {
          start: Math.min(min, endValue),
          end: Math.max(min, endValue),
        },
      ];
    }

    // Multiple
    const list = [];

    for (let i = 0; i < values.length - 1; i += 1) {
      list.push({
        start: values[i],
        end: values[i + 1],
      });
    }

    return list;
  }, [values, range, min]);

  return (
    <>
      {trackList.map(({ start, end }, index) => (
        <SliderTracksItem start={start} end={end} key={index} onStartMove={onStartMove} />
      ))}
    </>
  );
};

export default SliderTracks;
