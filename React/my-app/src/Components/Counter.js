import { Component } from "react";

export class Counter extends Component{
    state={
        val:0
    }
    increment=(e)=>{
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                val:prevState.val+1
            }
        })
    }
    decrement=(e)=>{
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                val:prevState.val-1
            }
        })
    }
    reset=(e)=>{
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                val:0
            }
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.val}</h2>
                <div class="increment">
                    <button onClick={this.increment}>Increment</button>
                </div>
                <div class="decrement">
                    <button onClick={this.decrement}>Decrement</button>
                </div>
                <div class="reset">
                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}