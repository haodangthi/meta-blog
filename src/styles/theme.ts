export const theme = {
  colors: {
    white: '#ffffff',
    primary: '#4B6BFB',
    secondary900: '#141624',
    secondary800: '#181A2A',
    secondary700: '#242535',
    secondary600: '#3B3C4A',
    secondary500: '#696A75',
    secondary400: '#97989F',
    secondary100: '#E8E8EA',
    secondary50: '#F6F6F7',
    background: '#000000',
    secondary300: '#BABABF',
  },
}

export const lightTheme = {
  background: theme.colors.white,
  titleColor: theme.colors.secondary800,
  mainPostTitleColor: theme.colors.white,
  textColor: theme.colors.secondary800,
  footerLinkColor: theme.colors.secondary600,
  footerText: theme.colors.secondary500,
  primaryColor: theme.colors.primary,
  backgroundFooter: theme.colors.secondary50,
  smallTextColor: theme.colors.secondary400,
  newsLetter: theme.colors.secondary50,
  switcherColor: theme.colors.secondary100,
  switcher: '-9px',
}

export const darkTheme = {
  background: theme.colors.secondary800,
  titleColor: theme.colors.white,
  mainPostTitleColor: theme.colors.white,
  textColor: theme.colors.secondary300,
  footerLinkColor: theme.colors.secondary300,
  footerText: theme.colors.secondary400,
  primaryColor: theme.colors.primary,
  backgroundFooter: theme.colors.secondary900,
  smallTextColor: theme.colors.secondary500,
  newsLetter: theme.colors.secondary700,
  switcherColor: theme.colors.primary,
  switcher: '10px',
}
