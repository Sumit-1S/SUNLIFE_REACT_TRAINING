import { Component } from "react";

export default class Header extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.hd}</h2>
            </div>
        )
    }
}