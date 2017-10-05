import React, { Component } from 'react';

class SearchBar2 extends Component {
  constructor(prop){
    super(prop);

    this.state = { term : ''};
  }

  render() {
    //return <input onChange={event => console.log(event.target.value)} placeholder="class components"/>
    return (
      <div>
        <input onChange={event => this.setState({ term : event.target.value })} placeholder="class components"/>
        Value of input : {this.state.term}
      </div>
    );
  }
}

export default SearchBar2;
