import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRandomUsersAction, getRandomUsersByNationalityAction } from '../../redux/actions/userActions';

const Settings = () => {
  const dispatch = useDispatch();

  const allLocal = localStorage.getItem('all');
  const gbLocal = localStorage.getItem('gb');
  const esLocal = localStorage.getItem('es');
  const chLocal = localStorage.getItem('ch');
  const frLocal = localStorage.getItem('fr');

  const gb = gbLocal === 'true' ? 'gb' : '';
  const es = esLocal === 'true' ? 'es' : '';
  const ch = chLocal === 'true' ? 'ch' : '';
  const fr = frLocal === 'true' ? 'fr' : '';

  const [allState, setAllState] = useState(allLocal === 'true');
  const [gbState, setGbState] = useState(gbLocal === 'true');
  const [esState, setEsState] = useState(esLocal === 'true');
  const [chState, setChState] = useState(chLocal === 'true');
  const [frState, setFrState] = useState(frLocal === 'true');

  const onSubmit = e => {
    e.preventDefault();
    if (allState) {
      dispatch(getRandomUsersAction());
    }
    dispatch(getRandomUsersByNationalityAction(gb, es, ch, fr));
  };
  return (
    <div className="container settings">
      <div className="row">
        <span className="setting-heading">Filter users by nationality:</span>
        <br />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              All Nationalities
              <input
                name="all"
                onChange={e => {
                  setAllState(e.target.checked);
                  localStorage.setItem(e.target.name, e.target.checked);
                }}
                checked={allState}
                className="setting-checkbox-input"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              United Kingdom
              <input
                name="gb"
                onChange={e => {
                  setGbState(e.target.checked);
                  localStorage.setItem(e.target.name, e.target.checked);
                }}
                checked={gbState}
                className="setting-checkbox-input"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              Spain
              <input
                name="es"
                onChange={e => {
                  setEsState(e.target.checked);
                  localStorage.setItem(e.target.name, e.target.checked);
                }}
                checked={esState}
                className="setting-checkbox-input"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              Switzerland
              <input
                name="ch"
                onChange={e => {
                  setChState(e.target.checked);
                  localStorage.setItem(e.target.name, e.target.checked);
                }}
                checked={chState}
                className="setting-checkbox-input"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              France
              <input
                name="fr"
                onChange={e => {
                  setFrState(e.target.checked);
                  localStorage.setItem(e.target.name, e.target.checked);
                }}
                checked={frState}
                className="setting-checkbox-input"
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Filter</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
