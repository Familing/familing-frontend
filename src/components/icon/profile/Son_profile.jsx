import React from 'react';
import {Circle, Ellipse, G, Mask, Path, Svg} from 'react-native-svg';

export const Son_profile = () => {
  return (
    <Svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="19.6699" cy="19.5615" r="19" fill="#4D83F4" />
      <Mask
        id="mask0_102_1583"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="39"
        height="39">
        <Circle cx="19.6699" cy="19.5615" r="19" fill="#1D1D45" />
      </Mask>
      <G mask="url(#mask0_102_1583)">
        <Path
          d="M19.7321 11.0772C29.5829 11.7369 30.3435 20.6795 28.7711 24.9083C27.2993 28.8663 22.7543 29.8624 20.5218 29.782C15.9716 29.618 12.83 26.8483 12.183 25.3815C11.6384 24.1471 10.9343 21.9566 10.6892 20.0412C10.5169 18.6941 10.0153 17.3465 9.1554 16.2953C6.27512 12.7738 6.57414 9.26148 7.11499 7.99059C9.23609 3.00643 11.748 4.64767 12.5267 6.36981C14.3388 10.3778 18.2374 10.9771 19.7321 11.0772Z"
          fill="black"
        />
        <Path
          d="M20.3411 33.4438C13.3975 32.8711 12.1432 24.8487 12.3921 20.1599C12.4193 19.6481 12.8512 19.2607 13.3637 19.2607H27.2464C27.7691 19.2607 28.2056 19.6667 28.2318 20.1887C28.7871 31.2385 23.4708 33.6607 20.3411 33.4438Z"
          fill="#FFCEC3"
        />
        <Ellipse
          cx="12.3244"
          cy="24.961"
          rx="1.71915"
          ry="2.38771"
          transform="rotate(-21.0616 12.3244 24.961)"
          fill="#FFCEC3"
        />
        <Ellipse
          cx="1.71915"
          cy="2.38771"
          rx="1.71915"
          ry="2.38771"
          transform="matrix(-0.968757 -0.248014 -0.248014 0.968757 30.8254 23.0742)"
          fill="#FFCEC3"
        />
      </G>
    </Svg>
  );
};
