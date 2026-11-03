/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Measured from Figma; adaptations are identified in docs/DESIGN_SYSTEM.md.
      colors: {
        brand: {
          DEFAULT: '#F3801A',
          start: '#FB8C14',
          end: '#F6A606',
        },
        canvas: '#101010',
        surface: '#191919',
        foreground: '#FFFFFF',
        muted: '#D7D7D7',
        border: '#444444',
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        hero: ['4rem', { lineHeight: 'normal' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2' }],
        // Figma uses 48/36; 1.2 prevents overlap when web headings wrap.
        section: ['3rem', { lineHeight: '1.2' }],
        'section-mobile': ['2rem', { lineHeight: '1.2' }],
        card: ['2rem', { lineHeight: '2.25rem' }],
        subheading: ['1.75rem', { lineHeight: '2.25rem' }],
        'body-large': ['1.75rem', { lineHeight: '2.25rem' }],
        body: ['1.5rem', { lineHeight: '2.25rem' }],
        'body-mobile': ['1.125rem', { lineHeight: '1.75rem' }],
        small: ['1.25rem', { lineHeight: 'normal' }],
        caption: ['0.875rem', { lineHeight: '1.25rem' }],
      },
      spacing: {
        section: '6.25rem',
        'section-inner': '5rem',
        'section-mobile': '4rem',
        heading: '1.25rem',
        content: '1.5rem',
        copy: '0.5rem',
        'feature-gap': '3.9375rem',
        'card-top': '1.875rem',
        'card-x': '1.25rem',
        'card-bottom': '3.125rem',
        panel: '4rem',
        'nav-x': '3.75rem',
        'nav-top': '2.625rem',
        'nav-bottom': '1.5rem',
        'nav-gap': '2.1875rem',
        'hero-gutter': '4.9375rem',
        'hero-action': '2.5rem',
        'control-x': '1.5rem',
        'control-y': '1.25rem',
        'control-small-x': '1rem',
        'control-small-y': '0.75rem',
        'control-large-x': '2rem',
        action: '2.5rem',
        gutter: '1.5rem',
        'gutter-tablet': '2.5rem',
      },
      maxWidth: {
        page: '94.5rem',
        content: '82.925rem',
        'hero-copy': '43.375rem',
        cta: '65.5rem',
      },
      minHeight: {
        control: '2.75rem',
      },
      borderRadius: {
        'control-small': '0.625rem',
        control: '0.75rem',
        card: '0.75rem',
        panel: '1.5rem',
      },
      boxShadow: {
        surface: 'none',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90.328deg, #FB8C14 2.5543%, #F6A606 102.47%)',
        'hero-gradient': 'linear-gradient(to bottom, #191919 76.953%, #101010 100%)',
      },
    },
  },
  plugins: [],
}
