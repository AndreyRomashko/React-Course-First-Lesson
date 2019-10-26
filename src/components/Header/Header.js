import React, {Component} from 'react';
import "./Header.scss";

export class Header extends Component {
    state = {
        isLoggedIn : false,
        showMenu : false,
    };


    login = () => {

        !this.state.isLoggedIn && this.setState({isLoggedIn : true})
    };
    logout = () => {

        !this.state.isLoggedIn && this.setState({isLoggedIn : false})
    };

    toggleMenu = () => {
        this.setState({showMenu : !this.state.showMenu})
    };

    render() {
        const {isLoggedIn , showMenu} = this.state;

        return (
            <div className="header">
                Simple header
                {isLoggedIn}
                {showMenu && <div> menu </div>}
                <button onClick={this.toggleMenu}>
                    {showMenu ? "Hide"  : "Show"} menu
                </button>
            </div>
        );
    }
}

