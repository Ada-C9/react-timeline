import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
				  <img src="https://media.truelocal.com.au/5/B/555D90B3-1F9C-42E8-8838-217D199B4CEB/1493975829928_OCTOS-LOGO-line-300x0.jpg" alt="logo" className="octos" />
          <h1 className="App-title">Octostagram</h1>
        </header>
        <main className="App-main">
				<Timeline data={ timelineData.events } />
        </main>
      </div>
    );
  }
}

export default App;
