import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoList />
      <Footer />
    </div>
  );
}

export default App;
