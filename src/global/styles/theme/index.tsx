import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

export const defaultTheme = createTheme(
  {
    palette: {
      mode: 'light',
      secondary: {
        main: '#2C66FF',
        light: '#00BDFC',
        dark: '#00a4db',
        contrastText: '#fff'
      },
      info: {
        main: '#6AD9FF',
        light: '#6AD9FF',
        dark: '#09ace2',
        contrastText: '#fff'
      }
    },
    mixins: {
      toolbar: {
        minHeight: 0,
        paddingRight: 0,
        '@media (min-width:600px)': {
          paddingRight: '175px'
        }
      }
    }
  },
  ptBR
)
