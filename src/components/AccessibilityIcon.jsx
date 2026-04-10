import React from 'react';

const AccessibilityIcon = () => {
  return (
    <button className="accessibility-btn" aria-label="Accessibility options">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19V15L16 11V9H8V11L11 15V19H13ZM12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8Z" fill="currentColor"/>
      </svg>
    </button>
  );
}

export default AccessibilityIcon;
