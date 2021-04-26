import logo from './logo.svg';
import './App.css';
import HelloMyFriends from '../components/HelloMyFriends';

const tasks = ['Bash', 'Git/Github', 'HTML', 'CSS', 'Javascript', 'Jest', 'React'];

const setTask = (task) => {
  return (
    <li key={task}> { task } </li>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMyFriends />
        <ul>
          <p>List of Technologies learned: </p>
          { tasks.map((task) => setTask(task)) }
        </ul>
      </header>
    </div>
  );
}

export default App;
