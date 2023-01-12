import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';


function App() {

  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const fetchedData = await response.json();
    setData(fetchedData);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="App" style={{display:'flex', paddingTop:'4rem', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <SearchBar></SearchBar>
      <header className="App-header" style={{display: 'grid', rowGap: '2rem', columnGap: '4rem', gridTemplateColumns: 'auto auto auto auto auto', paddingTop:'4rem'}} >
        
          {data.map((user) => 
          (<UserCard key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone} website={user.website} data={data} setData={setData}></UserCard>))}
          
      </header>
    </div>
  );
}

export default App;
