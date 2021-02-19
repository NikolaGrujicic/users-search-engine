import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getRandomUsersAction, infiniteScrolling, stackRandomUsersAction } from '../../redux/actions/userActions';
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

  const userToModal = id => {
    const user = searchUserById(id);
    if (user.location !== undefined) {
      setStreet(user.location.street.name);
      setCity(user.location.city);
      setState(user.location.state);
      setPostcode(user.location.postcode);
      setPhone(user.phone);
      setCell(user.cell);
    }
  };

  const resetUsersList = () => {
    dispatch(infiniteScrolling(false));
    window.location.reload();
  };

  return (
    <div>
      <div className="container users">
        <div>
          {scrolling && (
          <div className="alert alert-danger" role="alert">
            Infinity Scroll is off
            <button type="button" className="btn btn-outline-danger" onClick={() => resetUsersList()}>
              Reset
            </button>

          </div>
          )}
        </div>
        <div className="row">
          <InfiniteScroll
            dataLength={users.length}
            next={() => dispatch(stackRandomUsersAction())}
            hasMore={true}
            className="row"
            endMessage={(
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            )}
          >
            {users.map((user, index) => (
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
                  <p className="card-text text-center text-capitalize text-primary">{user.login.username}</p>
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
      <div className="text-center m-auto p-3 loading-container">
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
