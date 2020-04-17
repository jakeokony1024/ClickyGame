import React, { Component } from 'react';
import Container from './components/Container'
import ImageCard from './components/ImageCard'
import ImgContainer from './components/ImgContainer'
import Score from './components/Score'
import friends from './friends.json'
import './App.css';

class App extends Component{

  state = {
    friends
  }

  render() {
    return(
      <Container>
        {this.state.friends.map(friend => (
          <ImageCard id={ friend.id} image={friend.image}/>
        ))}
      </Container>
    )
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
