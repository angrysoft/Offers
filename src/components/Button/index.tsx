import { Component } from "react";
import "./style.css";

type ButtonProps = {
    name:string,
    type?:"button" | "submit" | "reset",
    color?:string
}

class Button extends Component<ButtonProps> {
    private classes : Array<string> = [];
    constructor(props:ButtonProps) {
        super(props);
        this.classes.push("btn");
        this.classes.push(`btn__background--${this.props.color || "default"}`);
    }

    render() {
        return (
            <button type={this.props.type} className={this.classes.join(" ")}>{this.props.name}</button>
        );
    }
}

export default Button;