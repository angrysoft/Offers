import { Component, MouseEventHandler} from "react";
import OfferRow from "../OfferRow";
import "./style.css";

type Offer = {
    id:string,
    name: string,
    signed: boolean
}

type DocumentsTableProps = {
    offersList: Array<Offer>,
    handleTableClick: MouseEventHandler,
}

class DocumentsTable extends Component<DocumentsTableProps> {
    constructor(props:DocumentsTableProps) {
        super(props);
        // this.handleRowClick = this.handleRowClick.bind(this);
    }

    public loadOfferList() {
        let offersElements:Array<any> = [];
        for (let el of this.props.offersList) {
            offersElements.push(
                <OfferRow
                    key={el.id}
                    id={el.id} 
                    name={el.name}
                    signed={el.signed} />
                );
        }

        return offersElements;
    }

    render() {
        return (
            <table id="documents-table">
                <caption>Oferty</caption>
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Podpisany</th>
                    </tr>
                </thead>
                <tbody onClick={this.props.handleTableClick}>
                    {this.loadOfferList()}
                </tbody>
            </table>
        );
    }
}

export default DocumentsTable;