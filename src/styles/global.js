import { Global } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => [
        {
          '@font-face': {
            fontFamily: 'Mono',
            src: "url('/fonts/IBMPlexMono-Regular.woff2') format('woff2')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'MonoB',
            src: "url('/fonts/IBMPlexMono-Bold.woff2') format('woff2')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sans',
            src: "url('/fonts/IBMPlexSans-Bold.woff2') format('woff2')",
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          'body,h1,h2,h3,h4,h5, p,figure,picture': {
            margin: 0,
          },
          'h1,h2,h3,h4,h5': {
            fontSize: '1em',
            fontWeight: 'normal',
            margin: 0,
          },
          strong: {
            fontWeight: 'normal',
          },
          svg: {
            display: 'block',
          },
          img: {
            width: '100%',
            objectFit: 'contain',
          },
          ul: {
            padding: 0,
          },
        },
      ]}
    />
  );
};

export default GlobalStyles;
