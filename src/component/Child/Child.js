import React, { Component } from "react";

class Child extends Component {
  constructor(){
    super();
    this.state= {
       Name:'SURYA',
       Dept:'DEVELOPING',
       Experience:'2 year'



    }
  }
  updateName =() =>{
    this.setState({Name:'karthi'},()=>{ 
    console.log('this.state',this.state);

    });
  }
  
  
  render() {
    return <div>
      {this.state.Name} <br/>{this.state.Dept}  <br/>{this.state.Experience}
      <button onClick={this.updateName}>changename</button>
      
    </div>;
  }
}

export default Child;
