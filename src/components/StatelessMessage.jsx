import React from 'react';

const StatelessMessage = ({ message }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h1>Stateless Message</h1>
      <p>{message}</p>
    </div>
  );
}

export default StatelessMessage;
