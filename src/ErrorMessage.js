
// src/components/ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message" role="alert">
      {message || 'An error occurred. Please try again.'}
    </div>
  );
};

export default ErrorMessage;