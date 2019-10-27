import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
  return (
    <div>
        <div id="nav">
            <div class="left">
                <a calss="home" href="#">Home</a>
            </div>
            <div class="right">
                <a href="#">Page1</a><a href="#">Page2</a><a href="#">Page3</a><a href="#">Page4</a>
            </div>
        </div>

        <div id="board">
            <p id="board-content">David Chen</p>
        </div>

        <div id="main">
            <div class="left">
                <p>left</p>
            </div>
            <div class="right">
                <p>right</p>
            </div>
        </div>

        <footer>
            <p>David</p>
        </footer>

    </div>

  );
}

export default App;
