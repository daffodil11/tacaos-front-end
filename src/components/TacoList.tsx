import React, { Component } from 'react';
import Taco, { ITaco } from "./Taco";
import * as api from "../utils/api";

class Tacos extends Component {
    state = {
        tacos: []
    }
    render() {
        const { tacos }: { tacos: ITaco[] } = this.state;
        return (
            <>
                <h2>All tacos</h2>
                <ul>
                  {tacos.map(taco => <Taco key={taco.id} taco={taco}/>)}
                </ul>
            </>
        );
    }

    componentDidMount() {
        console.log("TacoList mounted");
        this.fetchTacos();
    }
    
    fetchTacos = (): void => {
        console.log("Fetching tacos.");
        api.getTacos()
        .then(tacos => this.setState({ tacos }))
        .catch(console.log);
    }
}

export default Tacos;