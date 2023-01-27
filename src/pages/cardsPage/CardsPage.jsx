import { React, useState, useEffect } from 'react';
import { Box, TextField, ThemeProvider } from '@mui/material';
import { UserCard } from '../../components/UserCard/UserCard';
import theme from './theme';
import './CardsPageStyles.css';
import fetchUserData from '../../api/usersApi';
import useLocalStorage from '../../customHooks/useLocalStorage';

function CardsPage() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useLocalStorage([]);

  useEffect(() => {
    fetchUserData().then(fetchedData => setUsers(fetchedData));
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  }

  const filterUsers = (users, search) => {
    return users.filter((user) => {
      if (users.length !== 0 && search === '') {
        return user;
      } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
        return user;
      } else {
        return null;
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="CardsPage">
        <TextField className='searchField'
          size='small'
          onChange={handleInputChange}
          placeholder='Search users...' />
        <Box className="cardsContainer">
          {filterUsers(users, search).map((user) =>
          (<UserCard key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
            // user={user}
            users={users} setUsers={setUsers}
            favorites={favorites} setFavorites={setFavorites}
            favStatus={favorites.find(item => item.id === user.id) ? true : false} />))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CardsPage;
