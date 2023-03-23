import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  layout: 'centered',
  backgrounds: {
    default: 'gray900',
    values: [
      {
        name: 'black',
        value: '#000000',
      }, 
      {
        name: 'gray900',
        value: '#121214',
      },{
        name: 'gray100',
        value: '#E1E1E6',
      },
    ],
  },
}