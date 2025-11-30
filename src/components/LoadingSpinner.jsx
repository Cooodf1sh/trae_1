import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = 'primary', fullScreen = false }) => {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  };

  const colorClasses = {
    primary: 'spinner-primary',
    secondary: 'spinner-secondary',
    accent: 'spinner-accent'
  };

  const containerClass = fullScreen ? 'spinner-container-fullscreen' : 'spinner-container';

  return (
    <div className={containerClass}>
      <div className={`spinner ${sizeClasses[size]} ${colorClasses[color]}`}>
        <div className="spinner-inner"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;