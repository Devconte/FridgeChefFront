import { Box, Container, TextField } from '@mui/material';
import './Search.scss';

function Search() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{ mt: '1rem', mb: '1rem' }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField id="search-basic" label="Search" variant="outlined" />
      </Box>
    </Container>
  );
}

export default Search;
