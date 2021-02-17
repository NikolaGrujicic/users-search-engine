/* eslint-disable react/display-name */
/* eslint-disable prefer-arrow-callback */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getRandomUsersAction, stackRandomUsersAction } from '../../redux/actions/userActions';
import UsersDetailsModal from './UsersDetailsModal';

const Users = () => {
  const users = useSelector(state => state.randomUsers.users);
  const loading = useSelector(state => state.randomUsers.loading);
  const scrolling = useSelector(state => state.randomUsers.scrolling);

  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [postcode, setPostcode] = useState();
  const [phone, setPhone] = useState();
  const [cell, setCell] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(
        getRandomUsersAction(),
      );
    }
  }, []);

  const searchUserById = id => users.find(user => user.id.value === id);

  const userToModal = name => {
    const user = searchUserById(name);
    if (user.location !== undefined) {
      setStreet(user.location.street.name);
      setCity(user.location.city);
      setState(user.location.state);
      setPostcode(user.location.postcode);
      setPhone(user.phone);
      setCell(user.cell);
    }
  };

  return (
    <div>
      <div id="users-container" className="container">
        <div>
          {!scrolling && (
          <div className="alert alert-danger" role="alert">
            Infinity Scroll is off! #

            <button type="button" className="btn btn-outline-danger">
              Reset Infinity Scroll
            </button>

          </div>
          )}
        </div>
        <div className="row">
          <InfiniteScroll
            dataLength={users.length}
            next={() => dispatch(stackRandomUsersAction(2))}
            // eslint-disable-next-line react/jsx-boolean-value
            hasMore={true}
            className="row"
          >
            {users.map((user, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="card">
                <div className="card-body ">
                  <img
                    alt={user.name.first}
                    data-src={user.picture.large}
                    className="card-img-top"
                    src={user.picture.large}
                  />
                </div>
                <div className="card-footer">
                  <p className="card-text text-center text-capitalize text-primary">{user.name.first}</p>
                  <p className="card-text text-center text-capitalize text-primary">{user.name.last}</p>
                  <p className="card-text text-center text-capitalize text-primary">{user.email}</p>
                  <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#basicModal" onClick={() => userToModal(user.id.value)}>Details</button>
                </div>
                <br />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      {loading && (
      <div className="text-center m-auto p-3">
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
          <span className="visually-hidden">Loading...</span>
        </button>
      </div>
      )}
      <UsersDetailsModal
        state={state}
        city={city}
        street={street}
        postcode={postcode}
        phone={phone}
        cell={cell}
      />
    </div>
  );
};

export default Users;
