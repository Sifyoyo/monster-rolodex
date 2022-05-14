//import { Component } from 'react';
import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from "./components/card-list/card-list.component";
import './App.css';

const App = () => {

  const [monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState ("");
  const [filteredMonsters, setFilteredMonster] = useState(monsters);
  
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
      .then((users) => setMonster(users))
  }, []);

  useEffect(()=>{
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newfilteredMonsters);
  }, [monsters, searchField])
 


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const titleChange = event.target.value;
    setTitle(titleChange);
  }



  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>

      <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder={"Search Monster"} 
      className ={"monster"}/>

      <br />

      <SearchBox 
      onChangeHandler={onTitleChange} 
      placeholder={"Change Title"} 
      className ={"set title"}/>

      <CardList monsters={filteredMonsters} />

    </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ""
//     };
    
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//       .then((users) => 
//         this.setState(() => {
//           return {monsters: users}
//         }
//       ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
  
//     this.setState (()=> {
//       return {searchField};
//     });
// }

//   render(){

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
    
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={"Search Monster"} className ={"monster"}/>
//          {/*<input 
//           className='search-box' 
//           type="search" 
//           placeholder='Search monsters'  
//           onChange={onSearchChange}/> */}

//         {/*filteredMonsters.map((monster)=>{
//             return (
//               <div key={monster.id}>
//                 <h1>{monster.name}</h1>
//               </div>
//             )
            
//           })*/}
//          <CardList monsters={filteredMonsters} />
//       </div>
//     );

//   }

  
// }

export default App;
