import './assets/css/style.css'
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App relative w-full h-screen">
      <div id='main' className='absolute w-1/3 rounded bg-slate-100 h-2/3 left-1/3 mt-10 p-2'>
        <Header></Header>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
