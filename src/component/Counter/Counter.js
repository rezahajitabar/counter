import React, { Component } from 'react'
import './Counter.css'
export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state={
            counter:0
        }

        this.addHandler1=this.addHandler1.bind(this);
        this.addHandler2=this.addHandler2.bind(this);
    }

    addHandler1(){
        this.setState((prevState)=> {
           return {counter:prevState.counter + 1}
        })
    }

    addHandler2(){
        this.setState((prevNext)=> {
            return {counter:prevNext.counter - 1}
        })
    }
  render() {
    return (
      <div>
        <section id='main'>
            <div className='container'>
                <h2 id='title'>Counter</h2>
                <h3 id='counter'>{this.state.counter}</h3>
                <div className="btn-container">
                    <button id='add' onClick={this.addHandler1}>Add count</button>
                    <button id='lower' onClick={this.addHandler2}>lower count</button>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
