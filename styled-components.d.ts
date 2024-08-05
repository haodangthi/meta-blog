import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColor: string;
        primaryColor: string;
        secondaryColor: string;
        titleColor: string;
        linkColor: string;
        textColor: string;
        borderColor: string;
        backgroundFooter: string;
        switcher: string;
    }
}

