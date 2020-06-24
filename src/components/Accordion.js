import React, { Component } from 'react';
import AccordionItem from "./components/AccordionItem"
import PropTypes from "prop-types"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:[],
      openIndex:0,
    }
    this.toggleAccordion = this.toggleAccordion.bind(this)
  }
  toggleAccordion = task => {
     const newState = {...this.state}
     if(newState.openIndex === null){
       newState.task[task.id].isOpen = true
     } else{
       newState.openIndex = task.id
       newState.task.forEach(tasks => {
         if(tasks.id === newState.openIndex){
           tasks.isOpen = !tasks.isOpen
         } else{
           tasks.isOpen = false
         }
       });
     }
     this.setState(newState)
  }
  
  componentDidMount(){

  }

  render(){
    return (
      <div className="App">
        {this.state.task.map((task) => (
          <AccordionItem
            key={task.id}
            task={task}
            title={task.title}
            toggleAccordion={this.toggleAccordion}
            isOpen={task.isOpen}
          >
            {task.content}
          </AccordionItem>
        ))}
      </div>
    )
  }
}

AccordionItem.propTypes = {
    task:PropTypes.array.isRequired
}

export default App;
