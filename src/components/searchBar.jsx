import { Component } from "react";


class SearchBar extends Component{
    
    render(){
        return (
            <div >

                <input 

               className="searchbar"
                type="search"
                placeholder={this.props.placeHolder}
                onChange={this.props.onSearchHandler}/>
            </div>
        )
    }
}

export default SearchBar;