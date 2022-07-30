import {NavLink} from "react-router-dom";
import logo from '../logo.png'


function Header() {
    return (
        <>
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container-fluid">
                        <NavLink className='navbar-brand logo' to='/'> <img src={logo} alt="logo"
                                                                            className='logo'/></NavLink>
                        <NavLink className='navbar-brand' to='/'>Share notes</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className='navbar-nav'>
                                <li className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>
                                <li className='nav-item'><NavLink className='nav-link' to='/note'>Note</NavLink></li>
                                <li className='nav-item'><NavLink className='nav-link' to='/create'>Create</NavLink>
                                </li>
                                <li className='nav-item'><NavLink className='nav-link' to='/about'>About</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/*<nav className='navbar navbar-expand-lg bg-light'>*/}
            {/*    <div className='collapse navbar-collapse'>*/}
            {/*        <ul className='navbar-nav'>*/}
            {/*            <li className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>*/}
            {/*            <li className='nav-item'><NavLink className='nav-link' to='/note'>Note</NavLink></li>*/}
            {/*            <li className='nav-item'><NavLink className='nav-link' to='/create'>Create</NavLink></li>*/}
            {/*            <li className='nav-item'><NavLink className='nav-link' to='/about'>About</NavLink></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </>

    );
}

export default Header;