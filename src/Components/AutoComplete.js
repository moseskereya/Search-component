
import React, { Component } from 'react';
import "../Components/Auto.css"
class App1 extends Component {
    constructor(props) {
        super(props);
        this.items = [
            "Scottcate",
            "Moses",
            "Jamie",
            "Lazaro",
            "John",
            "Joe",
            "Lampard",
            "Daniel",
            "Ford",
            "Bmw",
            "Mercedez Benz",
            "Kilimanjaro",
            "Kibo",
            "Abx",
            "cars",
            "Banana",
            "Flowers",
            "HTML",
            "CSS",
            "Javascript",
            "React Js",
            "Ruby",
            "Swift",
            "Django",
            "Python",
            "Paul"
        ];

        this.state ={
            suggestions:[],
            text: ''
        }
    }

    onText = (e) =>{
        const value = e.target.value;
        let suggestions = []
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
            this.setState(() =>({suggestions, text: value}))
        }
    
    }

    renerSuggestions (){
        const {suggestions} = this.state;
        if(suggestions.length === 0){
            return null;

        }
        return (
            <ul>
            {suggestions.map((items) => <li className="list" onClick={() => this.suggestionsSelected(items)}>{items}</li>)}
           </ul>
        )
    }

    suggestionsSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
    }

    render() { 
        const { text} = this.state;
        return ( 
            <div className="AutoComplete">
                <input type="text" value={text}  onChange={this.onText} />
            <ul>
                {this.renerSuggestions()}
            </ul>
            </div>
         );
    }
}
 
export default App1;