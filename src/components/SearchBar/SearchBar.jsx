/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplitName from '../../libs/helpers/SplitName';
import { filterUsersByName, infiniteScrolling } from '../../redux/actions/userActions';

function SearchBar() {
  const users = useSelector(state => state.randomUsers.users);

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const onChange = e => {
    setFullName({ value: e.target.value });
  };

  const search = () => {
    dispatch(infiniteScrolling(false));
    const res = SplitName(fullName.value);
    const searchUserByFullName = users.filter(user => {
      return user.name.first === res.firstName && user.name.last === res.lastName;
    });
    const usersFiltered = searchUserByFullName;
    dispatch(filterUsersByName(usersFiltered));
  };
  return (
    <form className="form-inline">
      <input className="form-control mr-sm-2" onChange={onChange} type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" onClick={search} type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
