import { Component } from "react";

type OfferRowProps = {
    id: string,
    name:string,
    signed:boolean
}

export default class OfferRow extends Component<OfferRowProps> {

    render() {
        return (
            <tr id={this.props.id}>
                <td>{this.props.name}</td>
                <td>{this.props.signed ? "Tak": "Nie"}</td>
            </tr>
        );
    }
}