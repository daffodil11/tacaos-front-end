import axios from "axios";
import { ITaco } from "../components/Taco";

const BASE_URL = "http://localhost:9090";

export async function getTacos(): Promise<Array<ITaco[]>>{
    const { data }: { data: any } = await axios.get(BASE_URL + "/tacos");
    console.log(data);
    return data.tacos;
}

export async function getFavouriteTaco(username: string): Promise<ITaco> {
    const { data }: { data: any } = await axios.get(BASE_URL + "/users/" + username + "/taco");
    console.log(data);
    return data.taco;
}