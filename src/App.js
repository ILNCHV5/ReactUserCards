// import './App.css';
import { UserCard } from './components/UserCard';
// import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App" style={{display:'flex', paddingTop:'4rem', justifyContent:'center'}}>
      <header className="App-header" style={{display:'flex', flexDirection:'row'}} >
        
        {/* <div style={{backgroundColor:'white', height:'3rem', width:'5rem', boxShadow:'inset 2px 2px 2px 2px black'}} ></div> */}
        <UserCard />
        {/* <Typography variant='h2'> Hey World!</Typography> */}
      </header>
    </div>
  );
}

export default App;
