import React, { Component } from 'react';
import AccordionItem from "./components/AccordionItem"
import PropTypes from "prop-types"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      task:[
        {
          id:0,
          title:"Data Science Academy",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          isOpen:false
        },
        {
          id:1,
          title:"Software Engineer Academy",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          isOpen:false
        }
      ],
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
        {this.state.task.map((task, index) => (
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

export default App;
