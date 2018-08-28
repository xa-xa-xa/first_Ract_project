import React from 'react';

export default () => {
  return (
    <div className=" text-center">
      <br />
      <br />
      <h1 className="text-danger">
        <i class="far fa-dizzy fa-3x" />
      </h1>
      <h1 class="display-4">
        <span className="text-danger"> 404</span> Page{' '}
        <span className="text-danger">Not</span> Found
      </h1>
      <p className="lead">Sorry, this page does not exsist.</p>
    </div>
  );
};
