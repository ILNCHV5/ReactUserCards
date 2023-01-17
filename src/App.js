import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { UserCard } from './components/UserCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const retrievedFavs = JSON.parse(localStorage.getItem("favoriteCards"));
  const checkIfFavsExist = (retrievedFavs ? retrievedFavs : []);
  const [favorites, setFavorites] = useState(checkIfFavsExist);

  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchedData = await response.json();
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let favsToBeStored = JSON.stringify(favorites);
    localStorage.setItem("favoriteCards", favsToBeStored);
  }, [favorites]);

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  }
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <TextField className='searchField' size='small' onChange={handleInput} placeholder='Search users...' > </TextField>

        <header className="cards" >

          {data.filter((user) => {
            if (searchInput == '') {
              return user;
            } else if (user.name.toLowerCase().includes(searchInput.toLowerCase())) {
              return user;
            }
          }).map((user) =>
          (<UserCard key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email} 
            phone={user.phone} 
            website={user.website} 
            data={data} setData={setData}
            favorites={favorites} setFavorites={setFavorites} 
            favStatus={favorites.find(item => item.id === user.id) ? true : false}> 
            </UserCard>))}

        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
