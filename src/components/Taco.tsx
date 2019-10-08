import React from 'react';
import "./Taco.css";

export interface ITaco {
    id: number,
    title: string,
    baseIngredient: string,
    condiment: string,
    shell: string,
    seasoning: string
}
const Taco = (props: any) => {
    const taco: ITaco | null = props.taco;
    return (
        taco && <div className="taco-card">
            <h3>{taco.title}</h3>
            <h4>Ingredients:</h4>
            <div className="ingredientContainer">
                <ul>
                    <li>{taco.baseIngredient}</li>
                    <li>{taco.shell}</li>
                </ul>
                <ul>
                    <li>{taco.condiment}</li>
                    <li>{taco.seasoning}</li>
                </ul>
            </div>
        </div>
    );
};

export default Taco;