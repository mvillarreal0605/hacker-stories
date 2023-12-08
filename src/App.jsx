import * as React from 'react';

const welcome = {
  greeting: 'Hey',
  title:    'Tyson'
};

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor="search">Search: </label>
      <input id="searct" type="text" />
    </div>
  );
}

export default App;