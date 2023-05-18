
import './App.css';
import { Video,Audio} from './Video';
function App() {
console.log('App')
  return (
    <div className='App-header'>
   Hello AApp
   <Video/>
   <Audio/>
   <Demo/>
    </div>
  );
}
export default App;
function Demo(){
  console.log('Demo')
  return(
    <div className='App-header'>
      Hello This is Demo
    </div>
  );
}