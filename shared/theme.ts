import { ThemeProps } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    fonts: {
        basic: 'helvetica, sans-serif',
        mainFont: 'Suwannaphum, serif',
    },
    colors: {
        green: '#E4FF35',
        blue: '#60C2FB',
        orange: '#7FC4F8',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#696969',
        darkBlue: '#2C3E50',
        mainBg: '#FFFFFFFB',
    },
    breakpoints: {
        mobile: '576px',
        tablet: '768px',
        desktop: '1024px',
        desktopL: '1280px',
    },
    fontSizes: {
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
    },
}

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
html {scroll-behavior: smooth;
    width: 100%;
}
body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.white};

    }
    *,
    *::after,
    *::before { box-sizing: border-box; }
    h1, h2, h3, h4, h5, h6 { margin: 0; }
    a { 
        color: ${({ theme }) => theme.colors.green};
        text-decoration: none;
        transition: all 0.3s ease-in-out;
     }
    a:hover { color: ${({ theme }) => theme.colors.orange} }
    .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
    width: 100%;
    color: ${({ theme }) => theme.colors.green};
    background-color: rgba(0, 0, 0, 0.75);
    
    }
    
`
