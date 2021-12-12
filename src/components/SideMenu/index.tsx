import { Component } from "react";
import MenuAction from "../MenuAction";
import "./style.css";

type SideMenuProps = {
    handleActions: CallableFunction
}

class SideMenu extends Component<SideMenuProps> {

    render() {
        return (
            <aside id="side-menu">
                <section id="user-info">
                    <span className="material-icons">account_circle</span>
                    <span>user@local.net</span>
                    <MenuAction icon="logout" handelAction={this.props.handleActions} actionName="logout">Wyloguj</MenuAction>
                </section>
                <section id="actions">
                    <MenuAction icon="add" handelAction={this.props.handleActions} actionName="add">Dodaj Dokument</MenuAction>
                    <MenuAction icon="remove" handelAction={this.props.handleActions} actionName="remove">Usuń Dokument</MenuAction>
                    <MenuAction icon="file_download" handelAction={this.props.handleActions} actionName="get-pdf">Pobierz PDF</MenuAction>
                    <MenuAction icon="pageview" handelAction={this.props.handleActions} actionName="preview">Podgląd</MenuAction>
                    <MenuAction icon="link" handelAction={this.props.handleActions} actionName="get-link">Pobierz Link</MenuAction>
                </section>
            </aside>
        );
    }
}

export default SideMenu;