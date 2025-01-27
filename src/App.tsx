import '@styles/scss/main.scss';

import Layout from '@layout/index.tsx';
import theme from '@styles/theme/theme.ts';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './layout/Header';
import AppRoutes from './routes/index.tsx';
import GlobalStyles from './styles/theme/global.styled.ts';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
