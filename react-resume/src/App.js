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
            </div>
            <div class="right">
                <img class="img-right" src="https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
            </div>
        </div>

        <footer>
            <p>David Chen</p>
        </footer>

    </div>

  );
}

export default App;
