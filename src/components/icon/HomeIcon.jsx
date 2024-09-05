import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {resize} from 'react-native-responsive-sizer';

const ww = resize('ww', 360);
const wh = resize('wh', 800);

export const HomeIcon = ({color}) => {
  return (
    <Svg
      width={ww(24)}
      height={wh(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3 22.6828V8.2276L12.5 1L22 8.2276V22.6828H14.875V14.2506H10.125V22.6828H3Z"
        fill={color}
      />
    </Svg>
  );
};
