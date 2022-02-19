import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import GlobalStyle from './globalStyle';
import { ThemeProvider } from 'styled-components';
import themes from './themes';

function App() {
  const selected_theme = themes['main'];
  return (
    <BrowserRouter>
    <ThemeProvider theme={ selected_theme }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
