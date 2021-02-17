import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stackRandomUsersAction } from '../../redux/actions/userActions';
import UsersDetailsModal from './UsersDetailsModal';
import useInfiniteScroll from '../../libs/customHooks/useInfiniteScroll';

const Customers = () => {
  const page = useSelector(state => state.randomUsers.page);
  const users = useSelector(state => state.randomUsers.users);
  const fetch = useSelector(state => state.randomUsers.fetch);
  const loading = useSelector(state => state.randomUsers.loading);

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
        stackRandomUsersAction(page),
      );
    }
  }, []);

  const bottomBoundaryRef = useRef(null);

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

  useInfiniteScroll(bottomBoundaryRef, dispatch, page);

  return (
    <div>
      <div id="users-container" className="container">
        <div>
          {!fetch && (
          <div className="alert alert-danger" role="alert">
            Infinity Scroll is off! #

            <button type="button" className="btn btn-outline-danger">
              Reset Infinity Scroll
            </button>

          </div>
          )}
        </div>
        <div className="row">
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
      <div id="page-bottom-boundary" ref={bottomBoundaryRef} />
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

export default Customers;
