import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplitName from '../../libs/helpers/SplitName';
import { filterUsersByName, infiniteScrolling } from '../../redux/actions/userActions';

function SearchBar() {
  const dispatch = useDispatch();

  const users = useSelector(state => state.randomUsers.users);

  const [fullName, setFullName] = useState('');

  const onChange = e => {
    setFullName(e.target.value);
  };

  const search = () => {
    dispatch(infiniteScrolling(true));

    const result = SplitName(fullName);

    const searchUserByFullName = users.filter(user => {
      return user.name.first.toLowerCase() === result.firstName.toLowerCase()
      && user.name.last.toLowerCase() === result.lastName.toLowerCase();
    });

    const usersFiltered = searchUserByFullName;
    dispatch(filterUsersByName(usersFiltered));
  };

  return (
    <div className="form-inline">
      <input className="form-control mr-sm-2" onChange={onChange} type="search" placeholder="Search" aria-label="search-input" />
      <button className="btn btn-secondary my-2 my-sm-0" onClick={search} type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
