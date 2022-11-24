import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy,romantic,horror} from './constants/constants'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <div className='space'>

      </div>
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action Movies' url={action}/>
      <RowPost title='Comedy Movies' url={comedy}/>
      <RowPost title='Horror Movies' url={horror}/>
      <RowPost title='Romantic Movies' url={romantic}/>
    </div>
  );
}

export default App;
