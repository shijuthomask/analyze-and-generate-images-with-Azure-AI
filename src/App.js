import React from 'react';

function App() {

  // Add title to this page
  // A text box to enter the URL of the image to be analyzed or the prompt of the image to generate
  // A button to trigger the image analysis and one to trigger image generation
  return (
    <div>
      <h1>Image Analysis and Generation</h1>
      <input type="text" placeholder="Enter the URL of the image or the prompt of the image to generate" />
      <button>Image Analysis</button>
      <button>Image Generation</button>
    </div>
  );

  
  // const value = 'World';
  // return <div>Hello {value}</div>;
}

export default App;
