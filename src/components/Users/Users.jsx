/* eslint-disable arrow-body-style */
import React from 'react';
import UsersDetailsModal from './UsersDetailsModal';

const Customers = () => {
  return (
    <div>
      <div id="users-container" className="container">
        <div className="row">
          <div className="card">
            <div className="card-body ">
              <div className="card-footer">
                <p className="card-text text-center text-capitalize text-primary">Nikola</p>
                <p className="card-text text-center text-capitalize text-primary">Grujicic</p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <UsersDetailsModal />
    </div>
  );
};

export default Customers;
