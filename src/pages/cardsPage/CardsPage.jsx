import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import { UserCard } from '../../components/UserCard/UserCard';
import './CardsPageStyles.css';
import { fetchUserData } from '../../api/usersApi';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function CardsPage() {
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useLocalStorage(users);

  useEffect(() => {
    (async () => {
      const fetchedUsers = await fetchUserData();
      const sourceData = users.length ? users : fetchedUsers;
      setUsers(sourceData.map(user => ({ ...user, isFavorite: checkIfFavorite(user.id) })));
    })();
  }, [favorites]);

  const checkIfFavorite = (id) => {
    return favorites.map(user => {
      if (user.id === id)
        return user.isFavorite
    })
      .some(user => user === true)
  }

  const handleSearchUser = (event) => {
    setUsers(users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase())))
  };

  const handleFavoritesButtonClick = (id) => {
    setFavorites(favorites.map(user => user.id === id ? { id: user.id, isFavorite: !user.isFavorite } : user));
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
