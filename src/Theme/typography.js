const typography = {
  h1: {
    fontSize: 96,
    fontWeight: 300,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  h2: {
    fontSize: 60,
    fontWeight: 300,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  h3: {
    fontSize: 48,
    fontWeight: 400,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  h4: {
    fontSize: 34,
    fontWeight: 700,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  h5: {
    fontSize: 24,
    fontWeight: 500,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  h6: {
    fontSize: 20,
    fontWeight: 600,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 500,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  body: {
    fontSize: 14,
    fontWeight: 400,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  button: {
    cursor: 'default',
    whiteSpace: 'pre',
    boxSize: 'border-box',
    fontSize: 14,
    fontWeight: 400,
    color: '#0075ff',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    '&:hover': {
      fontSize: 14,
      color: '#00aaff',
      '&:after': {
        fontSize: 12,
        content: '"  🚀"',
      },
    },
    transition: 'all 0.4s',
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
}

export default typography
