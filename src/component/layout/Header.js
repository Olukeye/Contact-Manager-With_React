import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

 const Header = (props) => {
     const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark 
        bg-dark mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand ">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className='fas fa-home' />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">
                             <i className='fas fa-plus' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
Header.defaultProps ={
    branding: "My App"
}
Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default  Header;