import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/welcome';
import Invited from './components/Invited';
import Message from './components/Message';
import Count from './components/Count';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreating from './components/UserGreating';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      <UserGreating/>
      <ClassClick/>
      <FunctionClick/>
      <Greet/>
      <Welcome/>
      <Count/>
      <Message/>
      <Invited name = "Prince!" profe = 'Ruby on rails Developer'/>
      <Invited name = "Priyanka!" profe = 'Ruby on rails and Golange Developer'>
        <p>This is children, here i just want to check how its work.</p>
      </Invited>
      <Invited name = "Ashwani!" profe = 'Full stack mearn  Developer'>
        <button>chick</button>
      </Invited>
    </div>
  );
}


export default App;
