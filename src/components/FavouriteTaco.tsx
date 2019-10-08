import React, { Component } from 'react';
import Taco, { ITaco } from "./Taco";
import * as api from "../utils/api";

class FavouriteTaco extends Component {
    state = {
        username: "",
        taco: null
    }
    render() {
        const { username, taco }: { username: string, taco: ITaco | null } = this.state;
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" value={username} onChange={this.handleChange}></input>
                  <button type="submit">Submit</button>
              </form>
              <Taco taco={taco} />              
            </div>
        );
    }
    handleChange = (event: any): void => {
        this.setState({ username: event.target.value });
    }
    handleSubmit = (event: any): void => {
        event.preventDefault();
        api.getFavouriteTaco(this.state.username).then(taco => this.setState({ taco }));
    }
}

export default FavouriteTaco;