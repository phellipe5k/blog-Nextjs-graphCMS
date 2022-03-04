import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../globalStyle';
import { ThemeProvider } from 'styled-components';
import themes from '../themes';
import Provider from '../Provider/Provider';
import client from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';

const myApp = ({ Component, pageProps }: AppProps) => {
  const selected_theme = themes['main'];
  return (
    <ApolloProvider client={ client }>
      <Provider>
        <>
        <Head>
          <title>Portfolio - GraphQL - GraphCMS - Next.Js</title>
        </Head>
          <ThemeProvider theme={ selected_theme }>
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </>
      </Provider>
    </ApolloProvider>
      
  );
};

export default myApp;
