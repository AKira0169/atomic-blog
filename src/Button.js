import React from 'react';
export function Button({ setIsFakeDark, isFakeDark }) {
  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? '☀️' : '🌙'}
    </button>
  );
}
