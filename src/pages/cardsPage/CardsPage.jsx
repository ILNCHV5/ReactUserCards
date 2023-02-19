import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import { UserCard } from '../../components/UserCard/UserCard';
import './CardsPageStyles.css';
import { fetchUserData } from '../../api/usersApi';

function CardsPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedUsers = await fetchUserData();
      setUsers(fetchedUsers.map(user => ({ ...user, isFavorite: false})));
    })();
  }, []);
  
  const handleSearchUser = (event) => {
    setUsers(users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase())))
  };
  
  const handleFavoritesButtonClick = (id) => {
    setUsers(users.map(user => user.id === id ? {...user, isFavorite: !user.isFavorite} : user));
  };

  const handleDeleteButtonClick = (id) => {
    setUsers(users.filter((item) => (item.id !== id)))
  };

  return (
    <Box className="cardsPage">
      <TextField className='searchField'
        size='small'
        onChange={handleSearchUser}
        placeholder='Search users...' />
      <Box className="cardsContainer">
        {users.map((user) =>
        (<UserCard key={user.id}
          user={user}
          handleDeleteButtonClick={handleDeleteButtonClick}
          handleFavoritesButtonClick={handleFavoritesButtonClick}
        />))}
      </Box>
    </Box>
  );
}

export default CardsPage;
