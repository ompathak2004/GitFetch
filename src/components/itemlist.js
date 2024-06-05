import React from 'react';
import { List, ListItem, ListItemText, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  marginTop: 16, // 2 * 8px (theme.spacing(2))
  padding: 16, // 2 * 8px (theme.spacing(2))
});

const StyledListItem = styled(ListItem)({
  display: 'flex',
  alignItems: 'center',
});

const StyledAvatar = styled(Avatar)({
  marginRight: 16, // 2 * 8px (theme.spacing(2))
});

const StyledListItemText = styled(ListItemText)({
  wordBreak: 'break-word',
});

const ItemList = ({ repos }) => {
  return (
    <StyledPaper>
      <List>
        {repos.map((repo) => (
          <StyledListItem key={repo.id}>
            <StyledAvatar>{repo.name.charAt(0)}</StyledAvatar>
            <StyledListItemText
              primary={repo.name}
              secondary={<a href={repo.html_url}>{repo.html_url}</a>}
            />
          </StyledListItem>
        ))}
      </List>
    </StyledPaper>
  );
};

export default ItemList;
