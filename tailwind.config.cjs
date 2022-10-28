const theme = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')
const PREFIX = '--ms'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  safelist: [
    {
      pattern: /font-*/
    },
    {
      pattern: /ms-*/
    },
    {
      pattern: /text-*/
    },
    {
      pattern: /mb-*/
    },
    {
      pattern: /bg-*/
    }
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      inherit: 'inherit',
      transparent: 'transparent',
      'heading-color': 'var(--ms-heading-color)',
      'subtitle-color': 'var(--ms-subtitle-color)',
      'paragraph-color': 'var(--ms-paragraph-color)',
      tertiary: `var(${PREFIX}-tertiary)`,
      ghost: `var(${PREFIX}-ghost)`,
      default: `var(${PREFIX}-default)`,
      disabled: `var(${PREFIX}-disabled)`,
      placeholder: `var(${PREFIX}-placeholder)`,
      gray: {
        50: '#FCFCFC',
        100: '#FAFAFA',
        200: '#F5F5F5',
        300: '#F0F0F0',
        400: '#EBEBEB',
        DEFAULT: '#E6E6E6',
        600: '#C7C7C7',
        700: '#8A8A8A',
        800: '#5B5B5B',
        900: '#2D2D2D',
        950: '#171717'
      },
      primary: {
        50: '#F2F4F4',
        100: '#E6EAE9',
        200: '#CAD3D1',
        300: '#A9B9B6',
        400: '#809B96',
        DEFAULT: '#43766D',
        600: '#3B6961',
        700: '#335B54',
        800: '#2A4A44',
        900: '#1D3430',
        950: '#152522'
      },
      secondary: {
        50: '#FDF8F1',
        100: '#FCF1E4',
        200: '#F9E3C5',
        300: '#F6D3A1',
        400: '#F3C372',
        DEFAULT: '#F0B110',
        600: '#D69E0E',
        700: '#B9890C',
        800: '#976F0A',
        900: '#6B4F07',
        950: '#4B3705'
      },
      orange: {
        50: '#FDF4F2',
        100: '#FBE9E4',
        200: '#F7D1C7',
        300: '#F4B7A5',
        400: '#F09778',
        DEFAULT: '#ED702D',
        600: '#D36428',
        700: '#B75622',
        800: '#95461C',
        900: '#693214',
        950: '#4A230E'
      },
      purple: {
        50: '#F6F4FD',
        100: '#EEEAFB',
        200: '#DDD3F7',
        300: '#C9B9F4',
        400: '#B49BF0',
        DEFAULT: '#9D76ED',
        600: '#8C69D3',
        700: '#795BB7',
        800: '#634A95',
        900: '#463469',
        950: '#31254A'
      },
      success: {
        50: '#F2F7F4',
        100: '#E5EFE9',
        200: '#C8DFD2',
        300: '#A6CDB7',
        400: '#7BB998',
        DEFAULT: '#36A471',
        600: '#309265',
        700: '#297F57',
        800: '#226747',
        900: '#184932',
        950: '#113323'
      },
      danger: {
        50: '#FFF4F4',
        100: '#F4E5E5',
        200: '#E8C9C7',
        300: '#DCA8A5',
        400: '#CF7E79',
        DEFAULT: '#C23D2F',
        600: '#AD362A',
        700: '#962F24',
        800: '#7A261D',
        900: '#561B15',
        950: '#3D130E'
      },
      warning: {
        50: '#FFF9F3',
        100: '#FFF4E7',
        200: '#FFEACE',
        300: '#FFDFB0',
        400: '#FFD38D',
        DEFAULT: '#FFC75E',
        600: '#E4B154',
        700: '#C59A48',
        800: '#A17D3B',
        900: '#72582A',
        950: '#503E1D'
      },
      info: {
        50: '#F2F5FD',
        100: '#E5EBFB',
        200: '#C8D6F7',
        300: '#A5BEF4',
        400: '#7AA3F0',
        DEFAULT: '#3283ED',
        600: '#2C75D3',
        700: '#2665B7',
        800: '#1F5295',
        900: '#163A69',
        950: '#0F294A'
      }
    },
    screens: {
      xs: '320px',
      sm: '490px',
      md: '744px',
      lg: '960px',
      xl: '1440px',
      '2xl': '1920px',
    },
    boxShadow: {
      lg: '0px 32px 62px -16px rgba(0, 0, 0, 0.08)',
      DEFAULT: '0px 16px 22px -8px rgba(0, 0, 0, 0.1)',
      sm: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)'
    },
    extend: {
      spacing: {
        '4px': '0.25rem',
        '8px': '0.5rem',
        '16px': '1rem',
        '24px': '1.5rem',
        '32px': '2rem',
        '48px': '3rem',
        '64px': '4rem',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      height: {
        '4.5': '1.125rem',
      },
      translate: {
        '4.5': '1.125rem',
      },
      opacity: {
        2: '0.02'
      },
      borderRadius: {
        btn: `var(${PREFIX}-btn-border-radius)`
      },
      borderWidth: {
        '1/2': '0.5px'
      },
      fontSize: {
        'heading-lg': [`var(${PREFIX}-heading-1)`, {lineHeight: '96px'}],
        'heading-md': [`var(${PREFIX}-heading-2)`, {lineHeight: '75px'}],
        'heading-sm': [`var(${PREFIX}-heading-3)`, {lineHeight: '54px'}],
        'subtitle-lg': [
          `var(${PREFIX}-subtitle-lg)`,
          {lineHeight: theme.lineHeight['9']}
        ],
        'subtitle-md': [`var(${PREFIX}-subtitle-md)`, {lineHeight: '30px'}],
        'subtitle-sm': [`var(${PREFIX}-subtitle-sm)`, {lineHeight: '27px'}],
        'paragraph-lg': [
          `var(${PREFIX}-paragraph-lg)`,
          {lineHeight: theme.lineHeight['6']}
        ],
        'paragraph-md': [`var(${PREFIX}-paragraph-md)`, {lineHeight: '21px'}],
        'paragraph-sm': [`var(${PREFIX}-paragraph-sm)`, {lineHeight: '21px'}],
        '6.5xl': '4rem',
        '5.5xl': '3.125rem'
      },
      fontFamily: {
        'sans': ['IBM Plex Sans Arabic', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'animate-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {opacity: 0.5},
          '50%': {opacity: 0.15}
        }
      }
    }
  },
  plugins: [],
}
