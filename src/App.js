import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  state ={
    counters:[
        {id:1 , value:2},
        {id:2 , value:3},
        {id:3 , value:0},
        {id:4 , value:0}             
    ]
        
}

handleDelete = (counterId)=>{
    const counters = this.state.counters.filter(c => c.id !== counterId );
    this.setState({counters});    
};

handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});          
  }



handleReset = ()=>{
    const counters = this.state.counters.map(c => {
        c.value = 0 ; 
        return c;
    })
    this.setState({counters});
}

  render() {
    return (
      <div className="App">
        <NavBar totalCounter = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement = {this.handleIncrement}/>
        </main>
      </div>
    );
  }
}

export default App;
