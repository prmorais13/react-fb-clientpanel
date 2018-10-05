import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/client/add" className="btn btn-success btn-blcok">
        <i className="fa fa-plus" /> New
      </Link>
    </div>
  );
};
