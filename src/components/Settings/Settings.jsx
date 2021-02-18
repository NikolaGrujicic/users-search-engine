import React from 'react';

const Settings = () => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <div id="settings" className="container">
      <div className="row">
        <span className="setting-heading">Filter users by nationality:</span>
        <br />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              All Nationalities
              <input name="all" className="setting-checkbox-input" type="checkbox" aria-label="Checkbox for following text input" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              United Kingdom
              <input name="gb" className="setting-checkbox-input" type="checkbox" aria-label="Checkbox for following text input" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              Spain
              <input name="es" className="setting-checkbox-input" type="checkbox" aria-label="Checkbox for following text input" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              Switzerland
              <input name="ch" className="setting-checkbox-input" type="checkbox" aria-label="Checkbox for following text input" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-text setting-checkbox-container">
              France
              <input name="fr" className="setting-checkbox-input" type="checkbox" aria-label="Checkbox for following text input" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Filter</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
