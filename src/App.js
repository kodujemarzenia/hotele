import { Component } from 'react';
import './App.css';
import Header from './components/Header/header.js';
// import Menu from './components/Menu/menu.js';
import Hotels from './components/Hotels/hotels';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hotels: [
        {
          id:1,
          name: 'Pensjonat Miastowy',
          city:'Warszawa',
          rating:'8.3',
          description:'Najlepszy pensjonat na wakacje. Sprawdź cenik.',
          image:''
        },
        {
          id:2,
          name: 'Hotel na wzgórzu',
          city:'Zakopane',
          rating:'9.0',
          description:'Hotel twoich marzeń. Sprawdź cenik.',
          image:''
        }
      ]
    }
  }
  render(){
    return (<div>
      <Header />
      <Hotels hotels={this.state.hotels}/>
    </div>
    );
  }
  
}

export default App;
