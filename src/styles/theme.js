const theme = {
  baseFontSize: [16, 18, 20],
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.333rem',
    '1.777rem',
    '2.359rem',
    '3.157rem',
    '4.209rem',
    '5.61rem',
    '7.478rem',
    '9.969rem',
  ],
  fonts: {
    body: 'Mono, system-ui, sans-serif',
    bold: 'MonoB, system-ui, sans-serif',
    heading: 'Sans, system-ui, sans-serif',
  },
  space: [0, 4, 8, 16, 20, 24, 32, 48, 60, 72, 92, 100],
  breakpoints: ['760px', '1280px', '1440px', '1600px'],
  colors: {
    text: '#000',
    background: '#FFF',
    primary: '#000',
    secondary: '#000',
    accent: '#0000FF',
    muted: '#999',
  },
  wrapper: {
    fixed: {
      width: '100%',
      maxWidth: '1440px',
      m: 0,
      mx: 'auto',
      px: [6, 7, 8],
    },
    full: { width: '100%', m: 0, mx: 'auto', px: [6, 7, 8] },
  },

  grid: {
    display: 'grid',
    columnGap: [3, 5, 7], // 16, 24 ,48
    gridTemplateColumns: [
      // col-size = (maxContentWidth - (13 * gap + sideColsWidth * 2)) / numberOfCols
      // colSize = (1728 - (7 * 16) + (32 *2)) / 6 = 82
      'minmax(32px, 1fr) repeat(6, minmax(auto, 258.666666666666667px)) minmax(32px, 1fr)',
      // colSize = (1728 - (7 * 24) + (48 *2)) / 6 = 82
      'minmax(48px, 1fr) repeat(6, minmax(auto, 244px)) minmax(48px, 1fr)',
      // colSize = (1728 - (13 * 48) + (60 *2)) / 12 = 82
      'minmax(60px, 1fr) repeat(12, minmax(auto, 82px)) minmax(60px, 1fr)',
    ],
    fullWidth: {
      gridColumn: ['2 / 14'],
    },
    fullWidthNoBleedCol: {
      gridColumn: ['2 / span 6', null, '2 / span 12'],
    },
    contentCol: {
      gridColumn: ['2 / span 6', null, '2 / span 8'],
    },
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },

  layout: {
    variant: 'grid',
    gridTemplateRows: 'min-content auto min-content',
    py: 7,
    minHeight: '100vh',
    main: {
      gridColumn: ['2/8', null, '4/-1'],
      gridRow: ['2/4', '1/4'],
    },
    left: {
      default: {
        gridColumn: ['2/8', null, '2/4'],
        position: ['sticky'],
        zIndex: 2,
      },
      top: {
        variant: 'layout.left.default',
        gridRow: '1/2',
        top: 7,
      },
      bottom: {
        variant: 'layout.left.default',
        gridRow: '3/4',
        bottom: 7,
      },
    },
    right: {
      default: {
        gridColumn: ['7/8', null, '11/14'],
        position: 'sticky',
        display: 'flex',
        justifyContent: 'end',
      },
      top: {
        variant: 'layout.right.default',
        gridRow: '1/2',
        top: 7,
      },
      bottom: {
        variant: 'layout.right.default',
        gridRow: '3/4',
        bottom: 7,
      },
    },
  },

  page: {
    header: {
      mb: 6,
    },
  },

  link: {
    textDecoration: 'none',
    color: 'accent',
    ':hover': {
      textDecoration: 'underline',
    },
  },

  media: {
    position: 'relative',
    block: {},
    caption: {
      position: 'sticky',
      bottom: 0,
      left: 0,
      text: {
        bg: 'white',
        p: 2,
        width: 'fit-content',
      },
    },
  },

  video: {
    controls: {
      display: 'flex',
      gap: 4,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: 2,
      fontSize: 3,
      cursor: 'pointer',

      btn: {
        color: 'white',
        cursor: 'pointer',
        fontSize: 4,
      },
    },
    default: {
      position: 'relative',
      overflow: 'hidden',
      video: {
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },

    portrait: {
      variant: 'video.default',
      paddingTop: '133%',
      video: {
        variant: 'video.default.video',
      },
    },

    landscape: {
      variant: 'video.default',
      paddingTop: '56.25%',
      video: {
        variant: 'video.default.video',
      },
    },

    square: {
      variant: 'video.default',
      paddingTop: '100%',
    },
  },

  text: {
    pageTitle: {
      fontFamily: 'heading',
      lineHeight: '1em',
      fontSize: 5,
      m: 0,
    },
    sectionTitle: {
      fontFamily: 'heading',
      lineHeight: '1.3em',
      fontSize: 4,
    },
    previewHeadline: {
      fontFamily: 'heading',
      lineHeight: '1.3em',
      fontSize: 3,
    },
    smallText: {
      lineHeight: '1.3em',
      fontSize: 0,
    },
    body: {
      fontFamily: 'body',
      lineHeight: '1.5em',
      fontWeight: 'normal',
      fontSize: 1,
      p: {
        mb: '1.35em',
        maxWidth: '80ch',
      },
      h2: {
        fontSize: 3,
        fontFamily: 'heading',
        lineHeight: 1.3,
        mb: 1,
        mt: 8,
      },
      h3: {
        fontSize: 2,
        fontFamily: 'heading',
        lineHeight: 1.3,
        mb: 4,
        mt: 6,
      },
      '.inlineImg': {
        my: 6,
        display: 'block',
      },
    },
    highlighted: {
      fontFamily: 'heading',
      fontSize: 6,
      lineHeight: '1.2em',
      fontWeight: 'normal',
    },
  },

  styles: {
    root: {
      fontSize: [16, null, 18, 18],
      fontFamily: 'body',
    },
  },
};

export default theme;
