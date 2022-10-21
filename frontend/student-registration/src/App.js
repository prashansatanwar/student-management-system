import './App.css';
import Display from './components/Display';
import {useEffect,useState} from 'react';
import { getPosts } from './services/Posts';
import Header from './components/Header';
import Student from './components/Student';
import { Routes,Route } from 'react-router';

function App() {
  const [list,setList] = useState([]);
	
	useEffect(()=>{
		let mounted = true;
		getPosts()
			.then((res)=>{
				if(mounted){
					setList(res)
				}
			})
	},[]);
	
  return (
    <div className="App">
      <Header/>
	  <Routes>
		<Route exact path='/' element={<Display list={list} setList={setList}/>}/>
		<Route exact path='/edit' element={<Student/>}/>
	  </Routes>
    </div>
  );
}

export default App;
