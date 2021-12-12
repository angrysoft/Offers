import { Component, MouseEventHandler } from "react";
import "./style.css";

type MenuActionProps = {
    icon : string;
    handelAction: CallableFunction,
    actionName: string
}

export default class MenuAction extends Component<MenuActionProps> {

    constructor(props:MenuActionProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        this.props.handelAction(this.props.actionName);
    }

    render() {
        return (
            <div onClick={this.handleClick} className="action">
                <span className="material-icons">{this.props.icon}</span>
                <span>{this.props.children}</span>
            </div>
        );
    }
} 