import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import GlobalStyle from './globalStyle';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import Provider from './Provider/Provider';

function App() {
  const selected_theme = themes['main'];
  return (
    <Provider>
    <BrowserRouter>
      <ThemeProvider theme={ selected_theme }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
  )
}

export default App
