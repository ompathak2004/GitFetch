import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)({
  marginBottom: 16, // 2 * 8px (theme.spacing(2))
});

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <StyledTextField
      label="Search Users"
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={handleChange}
    />
  );
};

export default Search;
