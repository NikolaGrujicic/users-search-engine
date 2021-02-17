import React from 'react';

const UsersDetailsModal = ({ state, city, street, postcode, phone, cell }) => (
  <div className="modal fade" id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="myModalLabel">User Details</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            State:
            <u>{state}</u>
          </p>
          <p>
            City:
            <u>{city}</u>
          </p>
          <p>
            Street:
            <u>{street}</u>
          </p>
          <p>
            Postcode:
            <u>{postcode}</u>
          </p>
          <p>
            Phone:
            <u>{phone}</u>
          </p>
          <p>
            Cell:
            <u>{cell}</u>
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);

export default UsersDetailsModal;
