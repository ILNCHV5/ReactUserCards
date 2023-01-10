// import './App.css';
import { UserCard } from './components/UserCard';
// import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App" style={{display:'flex', paddingTop:'4rem', justifyContent:'center'}}>
      <header className="App-header" style={{display:'flex', flexDirection:'row'}} >
        
        
        <UserCard name='name' email='email' phone='phone' website='website'/>
        
      </header>
    </div>
  );
}

export default App;
