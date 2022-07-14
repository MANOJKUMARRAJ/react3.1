import Users from './users.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>User Names</h2>
    {
      Users.map( user =>{
        return(
          <div className="man" key={user.id}>
            
            <li>{user.username}</li>
          </div>
        )
      })
    }
     
    </div>
  );
}

export default App;
