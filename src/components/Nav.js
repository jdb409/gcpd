import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { user, signOut } = props;
    return (
        <nav className="navbar navbar-toggleable-md bg-faded">
            <li className="nav-item">
                <Link to="/">Home <span>&nbsp;</span></Link>
            </li>

            {user && user.username ?
                <div>
                    <li className="nav-item navbar-toggler-right">
                        <button onClick={() => {
                            signOut(props.route.history)
                        }}>Signout</button>
                    </li>
                    <li>Welcome {user.username} </li>
                </div>
                :
                <div>
                    <li className="nav-item navbar-toggler-right">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup">SignUp</Link>
                    </li>
                </div>
            }
        </nav>

    )
}

export default Nav;