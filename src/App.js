import React, { useState } from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from './components/navbar.js';
import ItemList from './components/itemlist.js';
import Search from './components/search.js';


const StyledContainer = styled(Container)({
  marginTop: 32, // 4 * 8px (theme.spacing(4))
});

const StyledTypography = styled(Typography)({
  textAlign: 'center',
  marginBottom: 32, // 4 * 8px (theme.spacing(4))
});

const App = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchRepos = (username) => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=5`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setRepos([]);
      });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      fetchRepos(term);
    } else {
      setRepos([]);
    }
  };

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <StyledContainer>
        <StyledTypography variant="h4">
          GitHub Repositories
        </StyledTypography>
        <Search onSearch={handleSearch} />
        <ItemList repos={repos} />
      </StyledContainer>
    </div>
  );
};

export default App;
