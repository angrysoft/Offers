import { Component, SyntheticEvent } from "react";
import DocumentsTable from "../../components/DocumentsTable";
import SideMenu from "../../components/SideMenu";
import "./style.css";

const testList = [
    {"id": "1", "name": "name1", "signed": false},
    {"id": "2", "name": "name2", "signed": true},
    {"id": "3", "name": "name3", "signed": false},
    {"id": "4", "name": "name4", "signed": true},
    {"id": "5", "name": "name5", "signed": false},
]

type OfferManagerProps = {}

class OfferManager extends Component {
    private selectedOfferRowElement:HTMLElement | null = null;
    
    constructor(props:OfferManagerProps) {
        super(props);
        this.handleTableClick = this.handleTableClick.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    public handleTableClick(ev: SyntheticEvent) {
        if ( this.selectedOfferRowElement) {
            this.selectedOfferRowElement.classList.remove("selected");
        }
        let currentRowElement:HTMLElement | null = ev.target as HTMLElement;
        if (! currentRowElement) { return}

        if (currentRowElement.tagName === "TD") {
            currentRowElement = currentRowElement.parentElement;
        }
        this.selectedOfferRowElement = currentRowElement;
        console.log(this.selectedOfferRowElement);
        this.selectedOfferRowElement?.classList.add("selected");
    }

    public handleActions(ev: SyntheticEvent) {
        console.log(ev);
    }

    render() {
        return (
            <div id="offers-manager">
                <SideMenu handleActions={this.handleActions} />
                <DocumentsTable offersList={testList} handleTableClick={this.handleTableClick}/>
            </div>
        );
    }
}

export default OfferManager;