import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { UserCard } from '../../components/UserCard/UserCard';
import './CardsPageStyles.css';
import { fetchUserData } from '../../api/usersApi';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function CardsPage() {
  const [users, setUsers] = useState([]);
  const [favorites, toggleFavorite] = useLocalStorage([]);

  useEffect(() => {
    (async () => {
      if (users.length === 0) {
        const userData = await fetchUserData();
        setUsers(userData.map(user => ({ ...user, isFavorite: checkIfFavorite(user.id) })));
      } else {
        setUsers(users.map(user => ({ ...user, isFavorite: checkIfFavorite(user.id) })));
      }
    })();
  }, [favorites]);

  const checkIfFavorite = (id) => {
    const favorite = favorites.find(user => user.id === id);
    return favorites.find(user => user.id === id) ? favorite.isFavorite : false;
  }

  const handleSearchUser = (event) => {
    setUsers(users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase())))
  };

  const handleFavoritesButtonClick = (id, isFavorite) => {
    toggleFavorite(id, isFavorite)
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
