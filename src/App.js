import {Route} from 'react-router-dom'
import Home from './component/Home';

function App() {
  return (
    <>
    <Route path={'/'} component={Home}/>
    </>
  );
}

export default App;
