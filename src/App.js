import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import UserInfo from './components/userInfo';
import SearchBar from './components/searchBar';

class App extends Component {
  constructor(){
    super()
    this.state={
      userDetails : [],
      searchText: "" 

    }
  }

  componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(res=>res.json())
    .then(users=>this.setState(()=>{
      return {userDetails:users.Search}
    }))
  }

  onUserSearch=(event)=>{
    const searchKey= event.target.value.toLocaleLowerCase()
    console.log("searchKey---",searchKey)
    this.setState(()=>{
      return {searchText:searchKey}
    })

  }

  render(){
    console.log("this.state.userDetails",this.state.userDetails)
    const filteredUserData= this.state.userDetails.filter((user)=>{
      return user.Title.toLocaleLowerCase().includes(this.state.searchText) ||
      user.Year.toLocaleLowerCase().includes(this.state.searchText)
      })

      
   
    const newText="SearchBar"
    return (
      <div className="App">
      
        <SearchBar onSearchHandler={this.onUserSearch} className={newText} placeHolder="                                                                                                                              Search For Movie Title ... "/>

        <UserInfo userData={filteredUserData}/>
       
      </div>

 
    );

  }
 
}

export default App;
