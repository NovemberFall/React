// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function getButtonText() {
//   return 'Click on me!';
// }

// function App() {
//   const buttonText = 'Click Me!';
//   return (
//     <div>
//       <label className="label" for="name">
//         Enter name:
//       </label>
//       <input id="name" type="text" />
//       <button style={{ backgroundColor: 'blue', color: 'white' }}>
//         {getButtonText()}
//       </button>
//     </div>
//   );
// }

// export default App;





















//Values JSX Can't show
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const buttonText = 'Click Me!';
  // const buttonText = ['Hi', 'There'];
  // const buttonText = [10, 20];
  const buttonText = { text: 'Click me' };
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name: ';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
}

export default App;






