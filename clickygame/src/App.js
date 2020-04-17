import React, { Component } from 'react';
import Container from './components/Container'
import ImageCard from './components/ImageCard'
// import ImgContainer from './components/ImgContainer'
import Title from './components/Title'
import friends from './friends.json'
import './App.css';

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Click on a friend's image to gain points! Click on the same one twice and you lose!";

class App extends Component{

  state = {
    friends,
    correctGuesses,
    bestScore,
    clickMessage
  }
  imageClick = id => {

    const friends = this.state.friends;
    const clickedFriend = friends.filter(friend => friend.id === id);
    
    if (clickedFriend[0].clicked) {

      console.log ("Correct Guesses: " + correctGuesses);
      console.log ("Best Score: " + bestScore);

      correctGuesses = 0;
      clickMessage = "Bummer! You already clicked on this one."

      for (let i = 0 ; i < friends.length ; i++) {
          friends[i].clicked = false;
      }

      this.setState({clickMessage});
      this.setState({ correctGuesses });
      this.setState({friends});
    
  }
  }
  render() {
    return (
      <Container>
          <Title>Clicky Game</Title>
  
          <h3 className="scoreSummary">
              {this.state.clickMessage}
          </h3>
          
          <h3 className="scoreSummary card-header">
              Correct Guesses: {this.state.correctGuesses} 
              <br />
              Best Score: {this.state.bestScore} 
          </h3>
          <div className="container">
          <div className="row">
          {this.state.friends.map(friend => (
              <ImageCard
                  imageClick={this.imageClick}
                  id={friend.id}
                  key={friend.id}
                  image={friend.image}
              />
          ))}
          </div>
          </div>

      </Container>
  );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
