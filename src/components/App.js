import React, { useState } from 'react';

// Assuming the CSS classes 'hide' and 'show' are defined externally 
// (e.g., in App.css or similar stylesheet)

function App() {
  // 1. Initialize state to control paragraph visibility.
  // We start with 'false' so the paragraph is initially hidden.
  const [isVisible, setIsVisible] = useState(false);

  // 2. Define the handler function to toggle visibility.
  const handleClick = () => {
    // When the button is clicked, set the state to true to show the paragraph.
    // If you needed to toggle back and forth, you would use: setIsVisible(prev => !prev);
    // Based on the prompt ("hidden paragraph becomes visible upon clicking"), 
    // setting it permanently to true is sufficient.
    setIsVisible(true); 
  };

  // Determine the correct className based on the state.
  // Initially, className will be "hide". After click, it will be "show".
  const paragraphClassName = isVisible ? 'show' : 'hide';

  return (
    // Required nesting: all elements inside a div with id="main"
    <div id="main">
      
      {/* 3. Button setup: required id="click" and onClick handler */}
      <button 
        id="click" 
        onClick={handleClick}
      >
        Click to Reveal
      </button>
      
      {/* 4. Paragraph setup: required id="para" and conditional className */}
      <p 
        id="para" 
        className={paragraphClassName}
      >
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
      
    </div>
  );
}

export default App;
