import { Component } from "react";


class UserInfo extends Component{
  
    
    render() {
        const {userData} = this.props;
        return (
          <div>
            <div className="cardbox">
              {userData.map((user) => {
                return (
                  <div className="card">
                    <img src={user.Poster} className="image" /> 
                    <p>{user.Title}</p>
                  </div>
                );
              })}
            </div>
            <footer  className="footer">
              <p>The Movies Website</p>
            </footer>
          </div>
        );
      }
    }


export default UserInfo;