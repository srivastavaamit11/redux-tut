import logo from './logo.svg';
import User from './user.js';
// import Home from './Components/home.js';  // this is the technique to use the home component directly in the app.
import HomeContainer from './Containers/HomeContainer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Redux Tutorial</h1>
      <User data={{name:'Amit Srivastava', age:"23"}} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;