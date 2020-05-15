import React from 'react';
import { NavLink } from 'react-router-dom';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    welcomeMessage() {
        if (this.props.currentUser.username) {
            return(
                <div className="welcome-message">
                    <div className="treasure-div"></div>
                    Welcome {this.props.currentUser.username}
                    {/* <button onClick={props.logout()}></button> */}
                </div>
            )
        } else{
          return(
              <div className="welcome-message">
                  <div className="treasure-div">
                      <p className="treasure-glow">----</p>
                  </div>
                  {/* <p className="missing-user">There is no current user</p> */}
              </div>
            )
        }
    }

    render() {
        return (
            <div className="welcome-page">
                {this.welcomeMessage()}
                <NavLink to="/items">
                    <button className="loot-button">Browse our loot!</button>
                </NavLink>
                <NavLink to="/item">
                    <button className="loot-button">Make some loot!</button>
                </NavLink>
                <NavLink to="/games">
                    <button className="make-loot">Make some loot!</button>
                </NavLink>
            </div>
        )
    }
}

export default WelcomePage;