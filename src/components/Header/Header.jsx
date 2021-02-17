import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="/">Users Search Engine</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/users">
            Users
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/settings">
            Settings
            <span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
      <SearchBar />
    </div>
  </nav>
);

export default Header;
