import React, { Component } from "react";

import "./Login.css";
import twitterLogo from "../twitter.svg";

export default class Login extends Component {
    state = {
        username: ""
    };

    handleSubmit = e => {
        e.preventDefault();

        const { username } = this.state;

        if (!username) return;

        localStorage.setItem("@omnistack:username", username);

        this.props.history.push("/timeline");
    };

    handleInputChange = e => {
        this.setState({ username: e.target.value.toUpperCase() });
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.username}
                        placeholder="Nome de usuário"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}
