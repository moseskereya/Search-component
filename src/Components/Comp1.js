import React, { Component } from 'react';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hide:false
         }
    }

 show (){
 this.setState((e) => ({
     hide:!e.hide
 }))
 }

    render() { 
        return ( 
            <div>
                <button onClick={(e) => this.show()} type="submit">Toggle Text</button>
                <h1>{!this.state.hide && this.props.text}</h1>
            </div>
         );
    }
}
 
export default App1;