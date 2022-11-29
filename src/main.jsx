import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import animateBubble from './liquid'
import './App.css'

ReactDOM.createRoot(document.getElementById('bubble-wrapper')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => { 
  const bubble = document.createElement("div");
  bubble.className = 'bubble';
  bubble.style.left = `${x}px`;
  wrapper.appendChild(bubble);
  setTimeout(() => wrapper.removeChild(bubble), 1000);
}

// Animation on mouse movement
document.onmousemove = e => animateBubble(e.clientX);
