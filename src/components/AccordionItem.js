import React, {  Component } from 'react'
import PropTypes from 'prop-types'
import './AccordionItem.css'
import Chevron from "./Chevron"

class AccordionItem extends Component {
    constructor(props){
        super(props);
        this.content = React.createRef()
        this.state = {
            active:"",
            height:"0px"
        }
    }
    // function toggleAccordion() {
    //     setActive(active === "" ? "active" : "")    
    //     setHeight(active === "" ?  `${content.current.scrollHeight}px` : "0px" )
    // } 

    // componentDidUpdate(prevProps){
    //     const {openIndex, key} = this.props
    //     if(openIndex !== prevProps.openIndex){
    //         if(openIndex === null){}
    //         else if(openIndex === key){
    //             this.state.active = "active"
    //             this.state.height = `${this.content.current.scrollHeight}px`
    //         } else{
    //             this.state.active = ""
    //             this.state.height = "0px"
    //         }
    //     }
    // }
    componentDidUpdate(prevProps){
        if(this.props.isOpen !== prevProps.isOpen){
            if(this.props.isOpen){
                this.setState({
                    active:"active",
                    height:`${this.content.current.scrollHeight}px`
                })
            } else{
                this.setState({
                    active:"",
                    height:"0px"    
                })
            }
        }
    }
    
    render(){
        const {key, title, children, task} = this.props
        const {active, height} = this.state
        return (
            <div className="accordion__section">
                <button 
                    className={`accordion ${active}`}
                    onClick={() => this.props.toggleAccordion(task)}
                    key={key}
                >
                    <p className="accordion__title">{title}</p>
                    <Chevron width={10} fill={"#777"} />
                </button>
                <div ref={this.content} style={{maxHeight:`${height}`}} className="accordion__content">
                    <div
                        className="accordion__text">
                            {children}
                    </div>
                </div>
            </div>
        )
    }
}

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired
}

export default AccordionItem

