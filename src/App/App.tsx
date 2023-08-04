import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from '../components/Navbar/NavBar';
import TextArea from '../components/TextArea/TextArea';
import Main from '../components/Main/Main';
import Search from '../components/Search/Search';

import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DB3A34',
    },
    secondary: {
      main: '#323031',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Search />
        <TextArea />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
