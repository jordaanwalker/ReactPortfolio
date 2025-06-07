import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    primary: string;
    secondary: string;
    background: string;
    card: string;
    border: string;
    shadow: string;
    navBackground: string;
    footerBackground: string;
  }
}
