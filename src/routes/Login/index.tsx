import { Component, createRef, FormEvent, RefObject } from "react";
import Button from "../../components/Button";
import './style.css';

type LoginProps = {}

class Login extends Component {
    private inputEmail:RefObject<HTMLInputElement>;
    private inputPassword: RefObject<HTMLInputElement>;

    constructor(props: LoginProps) { 
        super(props);
        this.handleLogin.bind(this);
        this.inputEmail = createRef();
        this.inputPassword = createRef();
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    render() {
        return (
            <form className="sign-in" onSubmit={this.handleLogin}>
                <input type="email" placeholder="Email" required className="sign-in__input" ref={this.inputEmail}/>
                <input type="password" placeholder="Hasło" required className="sign-in__input" ref={this.inputPassword}/>
                <Button type="submit" color="green" name="Zaloguj"/>
            </form>
        );
    }

    public handleLogin(event:FormEvent) {
        event.preventDefault();
        // send auth
        console.log(this.inputEmail.current?.value);
        console.log(this.inputPassword.current?.value);
    }
    
/*     public showWrongUserPassword() {
        // this.emailInput.setCustomValidity('Email lub hasło jest niepoprawne.');
        // this.emailInput.reportValidity();
    } */
}

export default Login;
