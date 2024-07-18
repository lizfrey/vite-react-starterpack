import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

function App() {
  return <div>This is my React Template</div>;
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
