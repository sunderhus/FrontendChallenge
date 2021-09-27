import { createGlobalStyle } from 'styled-components';
import githubBackground from 'assets/github-background.svg';
import { Colors, Typografy, Layout, Animations } from './designTokens';

export default createGlobalStyle`
  ${Colors};
  ${Typografy};
  ${Layout};
  ${Animations};

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body{
    background: url(${githubBackground}) no-repeat 70% top;
    background-color:var(---background);
    -webkit-font-smoothing: antialiased;
  }

  button{
      cursor:pointer;
  }
`;
